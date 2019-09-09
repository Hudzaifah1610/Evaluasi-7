import React from "react";
import { Link } from "react-router-dom";
import Api from "./Api";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

const Home = ({ logout }) => {
  logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div className="body-api">
      <div className="bungkus">
        <div className="navbar">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="name-web">MyNews.Com</Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="link1" to="#">
                Beranda
              </Link>
              <Link className="link1" to="#">
                HotNews
              </Link>
              <Link className="link1" to="#">
                LastNews
              </Link>
            </Nav>
            <Form inline>
              <Link to="/">
                <Button
                  className="button-api"
                  type="button"
                  onClick={logout}
                  variant="outline-primary"
                >
                  LogOut
                </Button>
              </Link>
            </Form>
          </Navbar>
        </div>
      </div>
      <Api />
      <div className="text">
        <h3>Artikel Terkait :</h3>
        <ol>
          <li>
            Politikus PD: Hati-hati! Cabut Paspor Veronica Koman Bisa Langgar
            HAM
          </li>
          <li>Anies Siapkan Langkah Pencegahan Tawuran Manggarai Terulang</li>
          <li>
            Cerita Saut Situmorang yang Sempat Ragukan Penanganan Kasus BLBI di
            KPK
          </li>
          <li>
            Atur PKL Berjualan, Anies: Trotoar Tidak Hanya untuk Pejalan Kaki
          </li>
          <li>135 Rumah di Madina Terendam Banjir Akibat Luapan 2 Sungai</li>
          <li>
            Ini Pesan Ketum Bhayangkari soal Polisi Terluka-Gugur saat Tugas
          </li>
          <li>
            Jalur Sepeda di DKI Ditambah, Anies Minta Kantor Siapkan Tempat
            Mandi
          </li>
          <li>Polisi Tangkap Pak Ogah Tanah Abang, Anies Harap Pelaku Jera</li>
        </ol>
        <h1 className="h1">Follow the news story Guys</h1>
      </div>
    </div>
  );
};

export default Home;
