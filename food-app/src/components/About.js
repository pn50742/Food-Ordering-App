import { Component } from "react";
import ProfileCard from "./ProfileCard";

// const About = () => {
//   return <div className="h-screen">About us</div>;
// };

// export default About;

class About extends Component {
  constructor(props) {
    //state change
    super(props);
    // this.state = {
    //   userInfo: {
    //     name: "dummy name",
    //     imgUrl: "",
    //   },
    // };
    console.log("parent constructor");
  }
  componentDidMount() {
    // const data = await fetch(" https://api.github.com/users/pn50742");
    // const json = await data.json();
    // console.log("parent componentDidMount", json);
    // this.setState = {
    //   userInfo: json,
    // };
    console.log("parent component didmount");
  }
  render() {
    console.log("parent render");
    return (
      <>
        {/* <h1>{this.props.name}</h1> */}
        <ProfileCard name="First Child" />
        {/* <ProfileCard name="second child" /> */}
      </>
    );
  }
}

export default About;
