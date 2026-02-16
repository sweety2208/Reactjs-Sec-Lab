import React,{ useState} from 'react'

function TabComponent() {
    const[activeTab,setActiveTab]=useState("Home");

 return (
    <div style={Styles.container}>
      <h1>Hi! Tab-Component</h1>
      <div style={Styles.tabContainer}></div>
        <button onClick={()=>setActiveTab("Home")}>Home</button>
        <button onClick={()=>setActiveTab("About")}>About</button>
        <button onClick={()=>setActiveTab("Contact")}>Contact</button>
        <div style={Styles.contentBox}></div>
          {activeTab === "Home" && <p>Home</p>}
          {activeTab === "About" && <p>ReactJs sec lab</p>}
          {activeTab === "Contact" && <p>@Technical Team</p>}


      
    </div>

  );
}
const Styles={
    container:{
        minHeight:"50vh",
        padding:"20px",
        border:"1px solid"
    },
    tabContainer:{
        padding: "20px",
        border: "none",
        margin: "20px",
    },
    contentBox:{
        height: "100px",
        width: "300px",
        marginleft: "300px",
        background: "lightblue",
        paddingTop: "10px"
    },

}



export default TabComponent
