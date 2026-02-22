
export default function Home() {
  return (
    <main>
        <div className="text-center">
          <h1>
            Your Media Vault
          </h1>
        </div>
            
        <div>
          <img src="/logo.drawio.png" alt="logo of the website"></img>
        </div>

        {/* this section will be used for the login information */}
        <div className="login">
          <p>First Time User</p>
          <button className="signup">Sign Up</button>
          <button className="signin">Sign In</button>    
        </div>     
    </main>
  );
}
