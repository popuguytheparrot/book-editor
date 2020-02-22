import React from 'react';

import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Zoom from '@material-ui/core/Zoom';

import AddIcon from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';
import Save from '@material-ui/icons/Save';

import dayjs from 'dayjs';

import { validateAuthors } from 'libs/validateAuthors';
import { validatePageCount } from 'libs/validatePageCount';

import { TextFieldAdapter } from 'components/_adapters/TextFieldAdapter';

import { style } from './styles';

const invalidYear = 1800;
const invalidReleasedDate = dayjs()
  .set('date', 1)
  .set('month', 0)
  .set('year', 1800);

const validate = values => {
  const errors = {};
  const publishYear = dayjs(values.publishYear).year();
  const released = dayjs(values.released);

  if (!values.title) {
    errors.title = 'Обязательное поле';
  }
  if (!values.pageCount) {
    errors.pageCount = 'Обязательное поле';
  }
  if (publishYear <= invalidYear) {
    errors.publishYear = 'Дата должна быть не раньше 1800гг';
  }
  if (invalidReleasedDate.isAfter(released)) {
    errors.released = 'Дата должна быть не раньше 01.01.1800гг';
  }
  // if (!values.ISBN) {
  //   errors.ISBN = 'Невалидный ISBN';
  // }
  return errors;
};

export const BookForm = ({ edit, onAddBook, onEditBook, book }) => {
  const onSubmit = (values, formApi) => {
    const nextid = Math.round(Math.random() * 1e10);
    const newBook = { id: nextid.toString(), ...values };

    if (edit) {
      return onEditBook(values);
    }
    setTimeout(formApi.reset);
    return onAddBook(newBook);
  };
  return (
    <Paper style={style.paper}>
      <Typography align="center" variant="h5" style={style.typo}>
        {edit ? 'Редактирование книги' : 'Добавлении книги'}
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={edit ? book : { authors: [{ name: '', surname: '' }] }}
        mutators={{
          ...arrayMutators
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop },
            submitting,
            pristine
          },
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} style={style.form} direction="column">
              <Grid item xs>
                <Field
                  name="title"
                  component={TextFieldAdapter}
                  type="text"
                  label="Заголовок"
                  maxLength="30"
                />
              </Grid>
              <Grid item xs>
                <div className="buttons">
                  <Button type="button" onClick={() => push('authors', {})}>
                    Добавить автора
                  </Button>
                  {values.authors && (
                    <Button type="button" onClick={() => pop('authors')}>
                      Удалить автора
                    </Button>
                  )}
                </div>
                <FieldArray name="authors" validate={validateAuthors}>
                  {({ fields }) =>
                    fields.map((name, index) => (
                      <Grid container key={name} alignItems="center" spacing={2}>
                        <Grid item>
                          <Typography variant="overline">{`Автор #${index + 1}`}</Typography>
                        </Grid>
                        <Grid item xs>
                          <Field
                            name={`${name}.name`}
                            component={TextFieldAdapter}
                            label="Имя"
                            maxLength="20"
                          />
                        </Grid>
                        <Grid item xs>
                          <Field
                            name={`${name}.surname`}
                            component={TextFieldAdapter}
                            label="Фамилия"
                            maxLength="20"
                          />
                        </Grid>
                        <Grid item>
                          <IconButton aria-label="Delete" onClick={() => fields.remove(index)}>
                            <Delete fontSize="small" />
                          </IconButton>
                        </Grid>
                      </Grid>
                    ))
                  }
                </FieldArray>
              </Grid>
              <Grid item xs>
                <Field
                  name="pageCount"
                  component={TextFieldAdapter}
                  type="text"
                  label="Кол-во страниц"
                  validate={validatePageCount}
                />
              </Grid>
              <Grid item xs>
                <Field
                  name="publishingHouse"
                  component={TextFieldAdapter}
                  type="text"
                  label="Издательство"
                  maxLength="30"
                />
              </Grid>
              <Grid item xs>
                <Field
                  name="publishYear"
                  component={TextFieldAdapter}
                  type="month"
                  label="Год публикации"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs>
                <Field
                  name="released"
                  component={TextFieldAdapter}
                  type="date"
                  label="Дата выхода в тираж"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs>
                <Field name="ISBN" component={TextFieldAdapter} type="text" label="ISBN" />
              </Grid>
            </Grid>

            <Zoom in unmountOnExit>
              <Fab
                color="primary"
                style={style.fab}
                type="submit"
                disabled={submitting || pristine}
              >
                {edit ? <Save /> : <AddIcon />}
              </Fab>
            </Zoom>
          </form>
        )}
      />
    </Paper>
  );
};
