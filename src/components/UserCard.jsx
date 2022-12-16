const UserCard = ({ userData }) => {
  const {name, age} = userDta
  return (
    <div>
      <h3>Nombre</h3>
      <h4><span>Edad:</span>{age}</h4>
    </div>
  )
}
export default UserCard