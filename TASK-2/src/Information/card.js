import React from "react";

const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "inline-flex",
    margin: "auto 5%"
  };
  return loading ? (
    <div id="main" align="center">
      <img
        src="https://cdn.dribbble.com/users/322079/screenshots/2283882/no-halftime-loaders-petrick.gif"
        alt="Loading..."
        className="loader"
      />
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile_cont" key={user.id}>
          {console.log(user)}
          <div className="circle"></div>
          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="email">{user.email}</p>
          <p>User ID: {user.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;

