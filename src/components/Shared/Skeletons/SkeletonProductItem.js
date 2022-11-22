import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkeletonElements from "./SkeletonElements";

const SkeletonProductItem = () => {
  // const { darkMode } = useTheme();
  // let viewportWidth = window.innerWidth;

  return (
    <div className={` explore-item--skeleton explore-item product_item`}>
      <Container className="skeleton_item_container item__container" fluid>
        <Row xs={1} sm={1} md={2} lg={2} xl={2} xxl={2} className=" item_row">
          <Col md={12} lg={4} xl={4} xxl={4} className="item_img_container  ">
            <SkeletonElements type="product_img item__img"></SkeletonElements>
          </Col>
          <Col
            md={12}
            lg={8}
            xl={8}
            xxl={8}
            className="skeleton_item_info_container"
          >
            <SkeletonElements type="title" />
            <div className="skeleton__item__description item__description">
              <SkeletonElements type="text" />
              <SkeletonElements type="text" />
              <SkeletonElements type="text" />
              <SkeletonElements type="text" />
            </div>
            <SkeletonElements type="price" />
            <SkeletonElements type="rating" />
            <div className="skeleton__btn__container">
              <SkeletonElements type="button" />
              <SkeletonElements type="button" />
            </div>
          </Col>
          {/* <Shimmer></Shimmer> */}
        </Row>
      </Container>
    </div>
  );
};

export default SkeletonProductItem;
