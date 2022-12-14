import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { motion } from "framer-motion";

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        className="navbar"
      >
        <div className="container grid">
          {products.map((curElem) => {
            const { id, name, image, price, description } = curElem;
            return (
              <div className="card grid grid-two-column">
                <figure>
                  <img src={image} alt={name} />
                </figure>

                <div className="card-data">
                  <h3>{name}</h3>
                  <p style={{ fontSize: "1.7rem", marginBottom: "0.6rem" }}>
                    <FormatPrice price={price} />
                  </p>
                  <p>{description.slice(0, 90)}...</p>

                  <NavLink to={`/singleproduct/${id}`} className="btn-main">
                    <motion.div
                      className="box"
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 1000,
                        damping: 10,
                      }}
                    >
                      <button
                        className="addToCartButton1"
                        style={{
                          Size: "10rem",
                          marginTop: "1.8rem",
                          marginLeft: "-0.6rem",
                        }}
                      >
                        Read More..
                      </button>
                    </motion.div>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  .container {
    max-width: 115rem;
  }
  .grid {
    gap: 3.9rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      // background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.3s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.1);
    }
    img {
      max-width: 90%;
      margin-top: 1rem;
      height: 19rem;
      transition: all 0.2s linear;
    }
  }
  // .card {
  //   border: 0.1rem solid rgb(170 170 170 / 40%);
  //   .card-data {
  //     padding: 0 2rem;
  //   }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default React.memo(ListView);
