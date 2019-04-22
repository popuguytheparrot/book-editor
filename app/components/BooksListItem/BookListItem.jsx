import React from 'react';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
// icons
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2
  },
  image: {
    width: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

function renderAuthors(authors = []) {
  if (authors.length === 1) {
    const [author] = authors;
    return `Автор: ${author.name} ${author.surname}`;
  }
  return authors
    .reduce((acc, author) => acc.concat(`${author.name} ${author.surname}, `), '')
    .slice(0, -2);
}

export function BooksListItem({
  id,
  title,
  image,
  authors,
  pageCount,
  publishingHouse,
  publishYear,
  released,
  ISBN,
  onDeleteBook
}) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} style={{ margin: 16 }}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt={title} src={image} style={{ objectFit: 'contain' }} />
          </ButtonBase>
        </Grid>
        <Grid item xs={6} sm container>
          <Grid item xs container direction="row" spacing={16} style={{ width: 'auto' }}>
            <Grid item xs>
              <Typography gutterBottom variant="h5">
                {title}
              </Typography>
              <Typography gutterBottom>{`${renderAuthors(authors)}`}</Typography>
              <Typography color="textSecondary">{`ISBN: ${ISBN}`}</Typography>
              <Typography color="textSecondary">{`Издательство: ${publishingHouse}`}</Typography>
              <Typography color="textSecondary">{`Год публикации: ${publishYear}`}</Typography>
              <Typography color="textSecondary">{`Дата выхода в тираж: ${released}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify="space-between"
          direction="column"
          style={{ width: 'auto' }}
        >
          <Grid item>
            <Typography variant="subtitle1">{`Кол-во стр: ${pageCount}`}</Typography>
          </Grid>
          <Grid item container justify="space-between">
            <Grid item>
              <IconButton aria-label="Edit" onClick={() => navigate(`/book/${id}/edit`)}>
                <Edit fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="Delete" onClick={() => onDeleteBook(id)}>
                <Delete fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
