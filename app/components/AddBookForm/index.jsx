import React from 'react';

import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

import { validateAuthors } from 'libs/validateAuthors';
import { validatePageCount } from 'libs/validatePageCount';

import { TextFieldAdapter } from 'components/_adapters/TextFieldAdapter';

import { style } from './styles';

const onSubmit = values => {
  console.log('values', values);
};

const validate = values => {
  console.log('validate', values);
  const errors = {};
  if (!values.title) {
    errors.title = 'Обязательное поле';
  }
  if (!values.pageCount) {
    errors.pageCount = 'Обязательное поле';
  }
  return errors;
};

export const AddBookForm = () => (
  <Paper style={style.paper}>
    <Typography align="center" variant="h5" style={style.typo}>
      Добавлении книги
    </Typography>
    <Form
      onSubmit={onSubmit}
      validate={validate}
      mutators={{
        ...arrayMutators
      }}
      render={({
        handleSubmit,
        form: {
          mutators: { push, pop },
          reset,
          submitting,
          pristine
        },
        values
      }) => (
        <Grid
          container
          component="form"
          onSubmit={handleSubmit}
          spacing={16}
          style={style.form}
          direction="column"
        >
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
                  <Grid container key={name} alignItems="center" spacing={8}>
                    <Grid item>
                      <Typography>{`Автор #${index + 1}`}</Typography>
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
              type="Издательство"
              label="Заголовок"
              maxLength="30"
            />
          </Grid>
          <Grid item xs>
            <Field
              name="publishYear"
              component={TextFieldAdapter}
              type="text"
              label="Год публикации"
            />
          </Grid>
          <Grid item xs>
            <Field
              name="released"
              component={TextFieldAdapter}
              type="text"
              label="Дата выхода в тираж"
            />
          </Grid>
          <Grid item xs>
            <Field name="ISBN" component={TextFieldAdapter} type="text" label="ISBN" />
          </Grid>
        </Grid>
      )}
    />
  </Paper>
);
