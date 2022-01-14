import Header from "../components/sharedComponents/Header";

const SharedComponentContainer = () => {
   
   const title = "Welcome to the Portfolio Tracker App"
   
   return (
        <>
            <hr/>
            <h1>This is the Shared Component Container</h1>
            <Header title={ title }/>
            <hr/>
         </>
     )
}

export default SharedComponentContainer;