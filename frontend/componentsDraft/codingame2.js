import React from "react";

export function ListUsers({ users }) {
  //   console.log(users);
  const usersSorted = users?.sort(function (a, b) {
    return a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase());
  });
  //   if (a.toLowerCase() < b.toLowerCase()) return -1;
  //   if (a.toLowerCase() > b.toLowerCase()) return 1;
  //   return 0;

  return (
    <div>
      {users.length === 0 && <div className="user-count">{`Users: 0`}</div>}

      {usersSorted && (
        <ul className="user-list">
          {usersSorted &&
            usersSorted.map((user, index) => (
              <li key={index}>
                {user.firstName} {user.lastName}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
