const root = ReactDOM.createRoot(document.getElementById('parent'));

function StudentForm() {
  const [student, setStudent] = React.useState({
    id: '',
    name: '',
    branch: '',
    college: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nID: ${student.id}\nName: ${student.name}\nBranch: ${student.branch}\nCollege: ${student.college}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Student Information</h2>
      <input type="text" name="id" placeholder="ID" value={student.id} onChange={handleChange} required /><br />
      <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required /><br />
      <input type="text" name="branch" placeholder="Branch" value={student.branch} onChange={handleChange} required /><br />
      <input type="text" name="college" placeholder="College" value={student.college} onChange={handleChange} required /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

root.render(<StudentForm />);
