import { Col, Row } from "antd";
import "antd/dist/antd.css"; //this import is essential in antd
import React from "react";

const Test = () => (
  <Row style={{ border: `1px solid red`, padding: `100px 30px` }}>
    {/* <Col
      style={{ border: `1px solid green`, marginBottom: `30px` }}
      xs={2}
      sm={4}
      md={6}
      lg={8}
      xl={24}
    >
      test 1
    </Col> */}

    <Col style={{ border: `1px solid blue`, padding: "15px" }} span={22}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime neque
        illo tempore voluptatibus blanditiis quia consequatur non aut,
        necessitatibus cupiditate! Culpa, architecto? Fugiat eos fugit, iure
        iste ipsum repudiandae enim alias cupiditate, est voluptas id corporis
        ipsam magni! Necessitatibus voluptatibus ducimus perspiciatis modi vel
        voluptates similique nulla ipsum eum cum exercitationem sit placeat
        maiores quam, laudantium odio aliquid fugit deserunt praesentium totam.
        Similique soluta ex voluptas, tenetur dicta enim culpa! Repudiandae
        error ipsam vitae, corrupti consequuntur exercitationem expedita vel quo
        tenetur facilis cumque est necessitatibus doloremque adipisci, at hic
        aspernatur eligendi? Ad placeat accusantium nostrum omnis harum
        corporis. Voluptate, optio!
      </span>
      <div style={{ overflow: "hidden" }}>
        <img
          width={`100%`}
          style={{ margin: `` }}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error
        ratione reprehenderit veritatis, possimus quibusdam voluptatibus
        laudantium delectus hic dolore. Reiciendis distinctio sed fugit sequi
        est quam sit nostrum aut architecto pariatur nihil provident
        consequuntur necessitatibus dolores quaerat vitae suscipit, deleniti a
        similique facere facilis quos nobis. Error, laborum officiis.
      </p>
    </Col>

    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col style={{ border: `` }} xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>
);

export default Test;
