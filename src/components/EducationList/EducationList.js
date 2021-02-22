// Modules
import React from 'react'
import axios from 'axios';
import {
  useQuery,
  // useQueryClient,
  // useMutation,
  // QueryClient,
  // QueryClientProvider
} from "react-query";
import { URL, STRINGS, MODAL_STATUS } from '../../internals/constants';

// Components
import EducationCard from '../EducationCard';
import EducationDialog from '../EducationDialog';

export default function EducationList() {
  // const queryClient = useQueryClient();
  const [ModalStatus, setModalStatus] = React.useState(MODAL_STATUS.CLOSED);
  const [selectedEducation, setSelectedEducation] = React.useState({});

  const handleEditEducation = (id) => {
    const selectedItem = data.find((education) => education.id === id)
    setSelectedEducation(selectedItem);
    setModalStatus(MODAL_STATUS.EDIT)
  };

  const handleAddNewEducation = (id) => {
    setModalStatus(MODAL_STATUS.NEW);
  };

  const handleCloseModal = (id) => {
    setModalStatus(MODAL_STATUS.CLOSED);
  };

  const { status, data, error, isFetching } = useQuery("todos", async () => {
    const res = await axios.get(URL);
    return res.data;
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <span>Error: { error.message }</span>;

  return (
    <div>
      <div>{ STRINGS.EDUCATION }<span onClick={ handleAddNewEducation }>+</span></div>
      {data.map((educationDetails) => (
        <EducationCard
        key={ educationDetails.id }
          educationDetails={ educationDetails }
          handleEditEducation={ handleEditEducation }
        />
      )) }
      {/* <EducationDialog
        handleCloseModal={ handleCloseModal }
        status={ ModalStatus }
        selectedEducation={ selectedEducation }
      /> */}
    </div>
  )
}
