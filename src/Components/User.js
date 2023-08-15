import useUserInfo from "../utilis/useUserInfo";

const User = () => {
  
  const userInfo = useUserInfo()
  console.log(userInfo)
  const {name, location, avatar_url} = userInfo
  return (
    <div className="user-card">
      <img src={avatar_url}/>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @rishabh</h4>
    </div>
  );
};

export default User;
