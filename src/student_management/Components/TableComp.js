import {Button, Table} from 'reactstrap';

const TableComp = (students) => {
    return (
    <div className='table'>
    <Table bordered responsive hover striped size='sm'>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Name
      </th>
      <th>
        Class
      </th>
      <th>
        Phone
      </th>
      <th>
        Date of Birth
      </th>
      <th>
        Update & Delete
      </th>
    </tr>
  </thead>
  <tbody>
    {students.map((student, index) => (
        <tr key={index}>
        <th scope="row">
          1
        </th>
        <td>
        {student.name}
        </td>
        <td>
        {student.class}
        </td>
        <td>
        {student.phone}
        </td>
        <td>
        {student.birthDate}
        </td>
        <td className="btnBox">
          <Button color='success'>Edit</Button>
          <Button color='danger'>Delete</Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>
</div>
    );
}

export default TableComp;