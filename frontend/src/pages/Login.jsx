const Login = () => {
  return (
<div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-cyan-700 from-50% to-gray-100 to-50% space-y-6">

<h2 className="text-3xl text-white">Inventory Management System</h2>


    <div className="border shadow-lg p-6 w-80 bg-white">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form >
        <div className="mb-4">
          <label className="block text-gray-700"  >Email</label>
          <input type="email" className="w-full px-3 py-2 border" name="email" placeholder="Entered Email" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700"  >Password</label>
          <input type="password"  
          className="w-full px-3 py-2 border"
          name="password" placeholder="Enter Password" />
        </div>
<div className="mb-4">
        <button type="submit" className="w-full bg-cyan-700 text-white py-2">Login</button> </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
