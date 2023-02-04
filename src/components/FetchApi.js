// import { useState } from "react";

// const FetchApi = () => {
//   const [data, setData] = useState([]);

//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((result) => {
//       setData(result);
//     });

//   const numbers = [1, 2, 3, 4, 5];
//   const listNumbers = numbers.map((number) => <li>{number}</li>);

//   return (
//     <div>
//       {data.map((user) => (
//         <div className="user-card">
//           <p>User ID: {user.id}</p>
//           <p>User Name: {user.name}</p>
//           <p>User E-Mail: {user.email}</p>
//           <p>User phone: {user.phone}</p>
//           <p>
//             User City: {user.address.city}, {user.address.zipcode}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FetchApi;
