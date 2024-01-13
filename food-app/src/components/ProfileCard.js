import { Component } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    //state change
    this.state = {
      userInfo: {
        name: "",
        avatar_url: "",
      },
    };
    console.log("parent constructor");
  }
  async componentDidMount() {
    const data = await fetch(
      "https://corsproxy.org/?https://api.github.com/users/pn50742"
    );
    const json = await data.json();
    console.log("parent componentDidMount", json);
    this.setState({
      userInfo: json,
    });
    console.log("userinfor", this.state.userInfo);
  }
  componentDidUpdate() {
    console.log(
      "component is updated with API data, and now componentditupdate will be called"
    );
  }
  componentWillUnmount() {
    console.log(
      "compoentwill unmount will called after compoent will be removed from UI"
    );
  }
  // console.log("user name", this?.state?.userInfo?.name);
  // console.log("user name", this?.state?.userInfo?.name);

  render() {
    // console.log("user name ", this.state.userInfo.name);
    // console.log("user image", this.state.userInfo.avatar_url);
    return (
      <>
        <Card className="p-5">
          <Grid container spacing={2}>
            <Grid>
              <img src={this.state.userInfo.avatar_url} alt="profile img" />
            </Grid>
            <Grid item xs={6}>
              <h2 className="text-3xl text-left">{this.state.userInfo.name}</h2>
            </Grid>
          </Grid>
        </Card>
      </>
    );
  }
}

export default ProfileCard;
