import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Home = ({search}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=72db6b6a&s=horror"
      );
      const res = await response.json();
      setData(res.Search);
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <Container>
      <Row>
        {
        data.filter(movie => movie.Title.toLowerCase().indexOf(search.toLowerCase()) !== -1).map((film) => (
          <Col key={film.imdbID}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={film.Poster} />
              <Card.Body>
                <Card.Title>{film.Title}</Card.Title>
                <Card.Text>{film.Type}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))
        }
      </Row>
    </Container>
  );
};

export default Home;
