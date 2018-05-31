import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import "../styles/ArticleCard.css";

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getArticlePreviewImage = img =>
    <img
      className="article-card-image"
      src={require(`../pages/ArticlePage/images/tacos.png`)}
      alt={this.props.title}
    />

  getCategoryImage = category =>
    <img
      className="article-card-icon"
      src={require(`../../public/categories/${category.toLowerCase()}.jpg`)}
      alt={category}
    />
  

  render() {
    return (
      <Link to={"/articles"}>
        <Grid fluid className="article-card">
          <Col md={4} xs={4} className="article-card-image-container">
            {this.getArticlePreviewImage(this.props.img)}
          </Col>
          <Col md={8} xs={8} className="article-card-contents">
            <div className="article-card-contents-spacer" />
            {this.getCategoryImage(this.props.category)}
            <h2 style={{ margin: "10px 0" }}>{this.props.title}</h2>
            <p>{this.props.desc}</p>
          </Col>
        </Grid>
      </Link>
    )
  }
}

export default ArticleCard;

/*
        <div className="article-card-icon-container">
          {this.getCategoryImage(this.props.category)}
        </div>



                  <p>
            {this.getCategoryImage(this.props.category)}
            {this.props.desc}
          </p>
        */