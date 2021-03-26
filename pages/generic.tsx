import * as React from "react";
import { Contact, Footer, Header, Menu } from "@src/components";

export interface IGenericProps {}

export default function Generic(props: IGenericProps) {
	return (
		<>
			<div className="is-preload">
				{/* <!-- Wrapper --> */}
				<div id="wrapper">
					<Header />
					<Menu />

					{/* <!-- Main --> */}
					<div id="main" className="alt">
						{/* <!-- One --> */}
						<section id="one">
							<div className="inner">
								<header className="major">
									<h1>Generic</h1>
								</header>
								<span className="image main">
									<img src="images/pic11.jpg" alt="" />
								</span>
								<p>
									Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
									primis in faucibus. Pellentesque venenatis dolor imperdiet
									dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas
									enim auctor sit amet. Pellentesque leo mauris, consectetur id
									ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia
									malesuada et a elit. Donec urna ex, lacinia in purus ac,
									pretium pulvinar mauris. Curabitur sapien risus, commodo eget
									turpis at, elementum convallis elit. Pellentesque enim turpis,
									hendrerit.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
									dapibus rutrum facilisis. className aptent taciti sociosqu ad
									litora torquent per conubia nostra, per inceptos himenaeos.
									Etiam tristique libero eu nibh porttitor fermentum. Nullam
									venenatis erat id vehicula viverra. Nunc ultrices eros ut
									ultricies condimentum. Mauris risus lacus, blandit sit amet
									venenatis non, bibendum vitae dolor. Nunc lorem mauris,
									fringilla in aliquam at, euismod in lectus. Pellentesque
									habitant morbi tristique senectus et netus et malesuada fames
									ac turpis egestas. In non lorem sit amet elit placerat
									maximus. Pellentesque aliquam maximus risus, vel sed vehicula.
								</p>
								<p>
									Interdum et malesuada fames ac ante ipsum primis in faucibus.
									Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
									Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
									Pellentesque leo mauris, consectetur id ipsum sit amet,
									fersapien risus, commodo eget turpis at, elementum convallis
									elit. Pellentesque enim turpis, hendrerit tristique lorem
									ipsum dolor.
								</p>
							</div>
						</section>
					</div>

					<Contact />
					<Footer />
				</div>
			</div>
		</>
	);
}
