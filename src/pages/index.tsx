import { Button } from "@src/components/common";
import React, { useEffect, FC } from "react";
import styles from "@styles/pages/home.module.scss";

interface HomPageProps {
	userData: any;
}

const HomePage: FC<HomPageProps> = () => {
	return (
		<div id={styles.ctn}>
			<Button btnSize="large">abc</Button>
		</div>
	);
};

export default HomePage;
