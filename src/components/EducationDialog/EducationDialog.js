import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
  },
}));

export default function EducationDialog({ handleCloseModal, modalStatus, selectedEducation: {
  id,
  schoolName,
  fieldOfStudy,
  description,
  city,
  from,
  to,
  current,
  educationType,
}}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleSave = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };


  return (
    <div>
      <Modal
        className={ classes.modal }
        open={ open }
        onClose={ handleCancel }
        closeAfterTransition
      >
        <div className={ classes.paper }>
          {/* // TODO: Add editable fields */}
        </div>
        <button type="button" onClick={ handleSave }>Save</button>
        <button type="button" onClick={ handleCancel }>Cancel</button>
      </Modal>
    </div>
  )
}
