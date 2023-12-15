"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Comments = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <span className={styles.username}>name</span>
              <span className={styles.date}>createdAt</span>
            </div>
          </div>
          <p className={styles.desc}>des</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
