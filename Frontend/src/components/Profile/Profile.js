/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import './Profile.css'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { axiosInstance } from '../../axios';
import { userBaseUrl } from '../../utils/const';


export default function Profile() {

    const user = useSelector(value => value.users.users.data);
    console.log("%^&*()_(*&^%$^&*()_", user);

    const [profilePic, setProfilePic] = useState(user?.profilePic);
    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [phone, setPhone] = useState(user?.phone);

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    // const [image, setImage] = useState(null);

    // const handleImageUpload = e => {
    //     const [file] = e.target.files;
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = e => {
    //             setImage(reader.result);
    //         };

    //         reader.readAsDataURL(file);
    //     }
    // };

    // handle-profile-picture upload
    const handleImageUpload = async (data) => {
        try {
            const formdata = new FormData();
            formdata.append("image", data);

            axiosInstance.post(`${userBaseUrl}/upload`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                if (response.success) {
                    setProfilePic(response.data);
                } else {
                    throw new Error('profile picture upload failed !!');
                }
            })
           
        } catch (err) {
           console.log("upload error: " + err);
        }   
    }

    useEffect(()=> {
        setProfilePic(user?.profilePic);
        setName(user?.name);
        setEmail(user?.email);
        setPhone(user?.phone);
    }, [user]);


    return (
        <>
        {user && (
            <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="6" className="mb-4 mb-lg-0">
                            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                                <MDBRow className="g-0">
                                    <MDBCol
                                        md="4"
                                        className="gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}
                                    >
                                        <div
                                            style={{
                                                marginTop: '50px',
                                                height: '100px',
                                                width: '100px',
                                                position: 'relative',
                                            }}
                                            onClick={() => imageUploader.current.click()}>
                                            {profilePic ? (
                                                <img
                                                    ref={uploadedImage}
                                                    src={profilePic}
                                                    alt="Avatar"
                                                    style={{ width: '100%', height: '100%', position: 'absolute' }}
                                                />
                                            ) : (
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                    alt="Avatar"
                                                    style={{ width: '100%', height: '100%', position: 'absolute' }}
                                                />
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            // onChange={handleImageUpload}
                                            onChange={(e) => handleImageUpload(e.target.files[0])}
                                            ref={imageUploader}
                                            style={{ display: 'none' }}
                                        />
                                        <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                                        <MDBCardText>Web Designer</MDBCardText>
                                        <MDBIcon far icon="edit mb-5" />
                                    </MDBCol>
                                    <MDBCol md="8">
                                        <MDBCardBody className="p-4">
                                            <MDBTypography tag="h6">Information</MDBTypography>
                                            <hr className="mt-0 mb-4" />
                                            <MDBRow className="pt-1">
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Email</MDBTypography>
                                                    <MDBCardText className="text-muted">{email }</MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Phone</MDBTypography>
                                                    <MDBCardText className="text-muted">{ phone }</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
    
                                            <MDBTypography tag="h6">Information</MDBTypography>
                                            <hr className="mt-0 mb-4 " />
                                            <MDBRow className="pt-1">
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Email</MDBTypography>
                                                    <MDBCardText className="text-muted">{name }</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
    
                                            <div className="d-flex justify-content-start">
                                                <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                                                <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                                                <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        )}
        </>
    );
}
