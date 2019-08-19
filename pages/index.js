import React from "react";
import Link from "next/link";
import Head from "next/head";
import {connect} from "react-redux"
import NavigationBar from "../components/NavigationBar";
import Container from "react-bootstrap/Container";
import Products from "../components/Products"
import "bootstrap/dist/css/bootstrap.min.css";

const Home = (props) => {

  
  return <>
    <NavigationBar />
    <Container>
      <Products />
    </Container>
  </>

}
export default connect()(Home);