import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EducationCard({ handleEditEducation, educationDetails: {
  id,
  schoolName,
  fieldOfStudy,
  description,
  city,
  from,
  to,
  current,
  educationType,
}
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div onClick={() => handleEditEducation(id)} >edit</div>
        <Typography className={ classes.title } color="textSecondary" gutterBottom>
        { fieldOfStudy } {bull} { schoolName }
        </Typography>
        <Typography className={ classes.title } color="textSecondary" gutterBottom>
        </Typography>
        <Typography className={ classes.title } color="textSecondary" gutterBottom>
          { description }
        </Typography>
        <Typography className={ classes.title } color="textSecondary" gutterBottom>
        </Typography>
        <Typography className={ classes.title } color="textSecondary" gutterBottom>
          { from } - { to } { bull } { city }
        </Typography>
        <Typography className={ classes.title } color="textSecondary" gutterBottom>
          { educationType }
        </Typography>
      </CardContent>
    </Card>
  )
}
