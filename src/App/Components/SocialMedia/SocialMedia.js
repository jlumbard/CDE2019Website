import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import './SocialMedia.css'

const SocialMedia = () => {
    //All of this is from here:
    //https://mdbootstrap.com/docs/react/components/buttons-social/
  return (
    <MDBContainer className="SocMedContainer">
      <MDBBtn href = "https://www.facebook.com/groups/1363389940346917/" size="lg" tag="a" floating social="fb">
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="tw">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="li">
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="ins">
        <MDBIcon fab icon="instagram" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="slack">
        <MDBIcon fab icon="slack" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="email">
        <MDBIcon icon="envelope" />
      </MDBBtn>
    </MDBContainer>
  );
}

export default SocialMedia;