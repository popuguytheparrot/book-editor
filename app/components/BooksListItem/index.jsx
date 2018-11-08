import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
});

function renderAuthors(authors) {
  console.log('authors', authors);
  if (authors.length === 1) {
    const [author] = authors;
    return `Автор: ${author.name} ${author.surname}`;
  }
  return authors.reduce((acc, author) => acc.join(), '');
}

function BooksListItem({
  id,
  title,
  image,
  authors,
  pageCount,
  publishingHouse,
  publishYear,
  released,
  ISBN,
  classes
}) {
  return (
    <Paper className={classes.root}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt={title} src={image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {title}
              </Typography>
              <Typography gutterBottom>{`${renderAuthors(authors)}`}</Typography>
              <Typography color="textSecondary">{`ISBN: ${ISBN}`}</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{`Кол-во стр: ${pageCount}`}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(BooksListItem);
