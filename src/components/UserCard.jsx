const UserCard = ({ UserData }) => {
  const {name, age} = UserData
  return (
    <div>
      <h3>Nombre</h3>
      <h4><span>Edad:</span>{age}</h4>
    </div>
  )
}
export default UserCard