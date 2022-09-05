import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Table } from 'react-bootstrap'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const SuperheroTable = ({ superheros }) => {
  let navigate = useNavigate()

  const handleEdit = (superhero) => {
    navigate(`/superhero/${superhero._id}`)
  }
  
  const handleDelete = () => {
    alert('delete')
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Full Name</th>
          <th>Alignment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {superheros.map((elem, index) => (
          <tr key={elem._id}>
            <td>{++index}</td>
            <td>{elem.name}</td>
            <td>{elem.biography.fullName ? elem.biography.fullName : 'No Data'}</td>
            <td>{elem.biography.alignment}</td>
            <td>
              <div className="d-flex justify-content-evenly">
                <FontAwesomeIcon
                  role="button"
                  icon={faEdit}
                  onClick={() => {
                    handleEdit(elem)
                  }}
                />
                <FontAwesomeIcon role="button" icon={faTrash} onClick={handleDelete} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default SuperheroTable
