import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import Pic1 from "../../../public/evie-s-ti6vZMUC6S4-unsplash.jpg";

const CategoryList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Image
          src={Pic1}
          alt="pic"
          width={32}
          height={32}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default CategoryList;
