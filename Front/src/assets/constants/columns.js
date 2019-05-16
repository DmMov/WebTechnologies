export const columns = [
  {
    title: 'ID',
    dataIndex: 'index',
    key: 'index',
  }, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  }, {
    title: 'Age',
    key: 'age',
    dataIndex: 'age',
  }, {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  }, {
    title: 'Registered Date',
    key: 'registeredDate',
    dataIndex: 'registeredDate',
  }, {
    title: 'Study Date',
    key: 'studyDate',
    dataIndex: 'studyDate',
    render: text => (
      <span>
      <Icon type="flag" style={{ color: !!text ? '#1890ff' : '#FF0134'}} /> 
      <span className="bold capitalize"> {!!text ? text : 'not chosen'}</span>
      </span>
    )
  }
];