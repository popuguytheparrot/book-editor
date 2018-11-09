import React from 'react';
import { Field, Form } from 'react-final-form';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { TextFieldAdapter } from 'components/_adapters/TextFieldAdapter';

const onSubmit = values => {
  console.log('values');
};

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

const style = {
  paper: {
    width: '50%'
  }
};

export const AddBookForm = () => (
  <Paper style={style.paper}>
    <Form
      onSubmit={onSubmit}
      initialValues={{ employed: true, stooge: 'larry' }}
      validate={validate}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <Grid container component="form" onSubmit={handleSubmit}>
          <Grid item>
            <Field name="firstName" component={TextFieldAdapter} type="text" label="First Name" />
          </Grid>
        </Grid>
      )}
    />
  </Paper>
);
