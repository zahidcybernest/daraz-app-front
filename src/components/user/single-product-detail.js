import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function SingleProductDetail() {

	const dispatch = useDispatch()
	const productData = useSelector(state => state.product.Product)
	const params = useParams();

  
	useEffect(() => {
  
		console.log(productData, '1');
  
		dispatch(fetchSingleProduct(params.id))
		// fetchProducts() 
		console.log(productData, '2');
		
  
	}, [])
  
	console.log(productData, '3');

    return (
        <React.Fragment>




<section  className="blog-banner-area" id="blog">
		<div  className="container h-100">
			<div  className="blog-banner">
				<div  className="text-center">
					<h1>Shop Single</h1>
					<nav aria-label="breadcrumb"  className="banner-breadcrumb">
            <ol  className="breadcrumb">
              <li  className="breadcrumb-item"><a href="#">Home</a></li>
              <li  className="breadcrumb-item active" aria-current="page">Shop Single</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>



  
	<div  className="product_image_area">
		<div  className="container">
			<div  className="row s_product_inner">
				<div  className="col-lg-6">
					<div  className="owl-carousel owl-theme s_Product_carousel">
						<div  className="single-prd-item">
							<img  className="img-fluid" src="/aromaStyle/img/category/s-p1.jpg" alt=""></img>
						</div>
						 <div  className="single-prd-item">
							<img  className="img-fluid" src="/aromaStyle/img/category/s-p1.jpg" alt=""></img>
						</div>
						<div  className="single-prd-item">
							<img  className="img-fluid" src="/aromaStyle/img/category/s-p1.jpg" alt=""></img>
						</div> 
					</div>
				</div>
				<div  className="col-lg-5 offset-lg-1">
					<div  className="s_product_text">
						<h3>{productData.name}</h3>
						<h2>${productData.price}</h2>
						<ul  className="list">
						
							<li><Link to={'/category/'+productData.category_id}><span>Category</span> : {productData.category_id}</Link></li>
							<li><a href="#"><span>Availibility</span> : In Stock</a></li>
						</ul>
						<p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
							something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
							during the winter.</p>
						<div  className="product_count">
              <label for="qty">Quantity:</label>
              <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
							  className="increase items-count" type="button"><i  className="ti-angle-left"></i></button>
							<input type="text" name="qty" id="sst" size="2" maxlength="12" value="1" title="Quantity:"  className="input-text qty"/>
							<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                className="reduced items-count" type="button"><i  className="ti-angle-right"></i></button>
							<a  className="button primary-btn" href="#">Add to Cart</a>               
						</div>
						<div  className="card_area d-flex align-items-center">
							<a  className="icon_btn" href="#"><i  className="lnr lnr lnr-diamond"></i></a>
							<a  className="icon_btn" href="#"><i  className="lnr lnr lnr-heart"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	

	
	<section  className="product_description_area">
		<div  className="container">
			<ul  className="nav nav-tabs" id="myTab" role="tablist">
				<li  className="nav-item">
					<a  className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
				</li>
				<li  className="nav-item">
					<a  className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
					 aria-selected="false">Specification</a>
				</li>
				<li  className="nav-item">
					<a  className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
					 aria-selected="false">Comments</a>
				</li>
				<li  className="nav-item">
					<a  className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
					 aria-selected="false">Reviews</a>
				</li>
			</ul>
			<div  className="tab-content" id="myTabContent">
				<div  className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
					<p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes
						and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in
						Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to
						London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an
						officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a
						job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when
						showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a
						child’s painting set for her birthday and it was with this that she produced her first significant work, a
						half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly
						named ‘Hangover’ by Beryl’s husband and</p>
					<p>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing
						more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and
						the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for
						more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a
						streamlined plan of cooking that is more efficient for one person creating less</p>
				</div>
				<div  className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					<div  className="table-responsive">
						<table  className="table">
							<tbody>
								<tr>
									<td>
										<h5>Width</h5>
									</td>
									<td>
										<h5>128mm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Height</h5>
									</td>
									<td>
										<h5>508mm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Depth</h5>
									</td>
									<td>
										<h5>85mm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Weight</h5>
									</td>
									<td>
										<h5>52gm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Quality checking</h5>
									</td>
									<td>
										<h5>yes</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Freshness Duration</h5>
									</td>
									<td>
										<h5>03days</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>When packeting</h5>
									</td>
									<td>
										<h5>Without touch of hand</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Each Box contains</h5>
									</td>
									<td>
										<h5>60pcs</h5>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div  className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
					<div  className="row">
						<div  className="col-lg-6">
							<div  className="comment_list">
								<div  className="review_item">
									<div  className="media">
										<div  className="d-flex">
											<img src="/aromaStyle/img/product/review-1.png" alt=""></img>
										</div>
										<div  className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a  className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div  className="review_item reply">
									<div  className="media">
										<div  className="d-flex">
											<img src="/aromaStyle/img/product/review-2.png" alt=""></img>
										</div>
										<div  className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a  className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div  className="review_item">
									<div  className="media">
										<div  className="d-flex">
											<img src="/aromaStyle/img/product/review-3.png" alt=""></img>
										</div>
										<div  className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<a  className="reply_btn" href="#">Reply</a>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
							</div>
						</div>
						<div  className="col-lg-6">
							<div  className="review_box">
								<h4>Post a comment</h4>
								<form  className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
									<div  className="col-md-12">
										<div  className="form-group">
											<input type="text"  className="form-control" id="name" name="name" placeholder="Your Full name"/>
										</div>
									</div>
									<div  className="col-md-12">
										<div  className="form-group">
											<input type="email"  className="form-control" id="email" name="email" placeholder="Email Address"/>
										</div>
									</div>
									<div  className="col-md-12">
										<div  className="form-group">
											<input type="text"  className="form-control" id="number" name="number" placeholder="Phone Number"/>
										</div>
									</div>
									<div  className="col-md-12">
										<div  className="form-group">
											<textarea  className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
										</div>
									</div>
									<div  className="col-md-12 text-right">
										<button type="submit" value="submit"  className="btn primary-btn">Submit Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div  className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
					<div  className="row">
						<div  className="col-lg-6">
							<div  className="row total_rate">
								<div  className="col-6">
									<div  className="box_total">
										<h5>Overall</h5>
										<h4>4.0</h4>
										<h6>(03 Reviews)</h6>
									</div>
								</div>
								<div  className="col-6">
									<div  className="rating_list">
										<h3>Based on 3 Reviews</h3>
										<ul  className="list">
											<li><a href="#">5 Star <i  className="fa fa-star"></i><i  className="fa fa-star"></i><i  className="fa fa-star"></i><i
													  className="fa fa-star"></i><i  className="fa fa-star"></i> 01</a></li>
											<li><a href="#">4 Star <i  className="fa fa-star"></i><i  className="fa fa-star"></i><i  className="fa fa-star"></i><i
													  className="fa fa-star"></i><i  className="fa fa-star"></i> 01</a></li>
											<li><a href="#">3 Star <i  className="fa fa-star"></i><i  className="fa fa-star"></i><i  className="fa fa-star"></i><i
													  className="fa fa-star"></i><i  className="fa fa-star"></i> 01</a></li>
											<li><a href="#">2 Star <i  className="fa fa-star"></i><i  className="fa fa-star"></i><i  className="fa fa-star"></i><i
													  className="fa fa-star"></i><i  className="fa fa-star"></i> 01</a></li>
											<li><a href="#">1 Star <i  className="fa fa-star"></i><i  className="fa fa-star"></i><i  className="fa fa-star"></i><i
													  className="fa fa-star"></i><i  className="fa fa-star"></i> 01</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div  className="review_list">
								<div  className="review_item">
									<div  className="media">
										<div  className="d-flex">
											<img src="/aromaStyle/img/product/review-1.png" alt=""></img>
										</div>
										<div  className="media-body">
											<h4>Blake Ruiz</h4>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div  className="review_item">
									<div  className="media">
										<div  className="d-flex">
											<img src="/aromaStyle/img/product/review-2.png" alt=""></img>
										</div>
										<div  className="media-body">
											<h4>Blake Ruiz</h4>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div  className="review_item">
									<div  className="media">
										<div  className="d-flex">
											<img src="/aromaStyle/img/product/review-3.png" alt=""></img>
										</div>
										<div  className="media-body">
											<h4>Blake Ruiz</h4>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
											<i  className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
							</div>
						</div>
						<div  className="col-lg-6">
							<div  className="review_box">
								<h4>Add a Review</h4>
								<p>Your Rating:</p>
								<ul  className="list">
									<li><a href="#"><i  className="fa fa-star"></i></a></li>
									<li><a href="#"><i  className="fa fa-star"></i></a></li>
									<li><a href="#"><i  className="fa fa-star"></i></a></li>
									<li><a href="#"><i  className="fa fa-star"></i></a></li>
									<li><a href="#"><i  className="fa fa-star"></i></a></li>
								</ul>
								<p>Outstanding</p>
                <form action="#/"  className="form-contact form-review mt-3">
                  <div  className="form-group">
                    <input  className="form-control" name="name" type="text" placeholder="Enter your name" required/>
                  </div>
                  <div  className="form-group">
                    <input  className="form-control" name="email" type="email" placeholder="Enter email address" required/>
                  </div>
                  <div  className="form-group">
                    <input  className="form-control" name="subject" type="text" placeholder="Enter Subject"/>
                  </div>
                  <div  className="form-group">
                    <textarea  className="form-control different-control w-100" name="textarea" id="textarea" cols="30" rows="5" placeholder="Enter Message"></textarea>
                  </div>
                  <div  className="form-group text-center text-md-right mt-3">
                    <button type="submit"  className="button button--active button-review">Submit Now</button>
                  </div>
                </form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>



	<section  className="related-product-area section-margin--small mt-0">
		<div  className="container">
			<div  className="section-intro pb-60px">
        <p>Popular Item in the market</p>
        <h2>Top <span  className="section-intro__style">Product</span></h2>
      </div>
			<div  className="row mt-30">
        <div  className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div  className="single-search-product-wrapper">
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-1.png" alt=""></img></a>
              <div  className="desc">
                  <a href="#"  className="title">Gray Coffee Cup</a>
                  <div  className="price">$170.00</div>
              </div>
            </div>
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-2.png" alt=""></img></a>
              <div  className="desc">
                <a href="#"  className="title">Gray Coffee Cup</a>
                <div  className="price">$170.00</div>
              </div>
            </div>
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-3.png" alt=""></img></a>
              <div  className="desc">
                <a href="#"  className="title">Gray Coffee Cup</a>
                <div  className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>

        <div  className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div  className="single-search-product-wrapper">
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-4.png" alt=""></img></a>
              <div  className="desc">
                  <a href="#"  className="title">Gray Coffee Cup</a>
                  <div  className="price">$170.00</div>
              </div>
            </div>
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-5.png" alt=""></img></a>
              <div  className="desc">
                <a href="#"  className="title">Gray Coffee Cup</a>
                <div  className="price">$170.00</div>
              </div>
            </div>
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-6.png" alt=""></img></a>
              <div  className="desc">
                <a href="#"  className="title">Gray Coffee Cup</a>
                <div  className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>

        <div  className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div  className="single-search-product-wrapper">
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-7.png" alt=""></img></a>
              <div  className="desc">
                  <a href="#"  className="title">Gray Coffee Cup</a>
                  <div  className="price">$170.00</div>
              </div>
            </div>
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-8.png" alt=""></img></a>
              <div  className="desc">
                <a href="#"  className="title">Gray Coffee Cup</a>
                <div  className="price">$170.00</div>
              </div>
            </div>
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-9.png" alt=""></img></a>
              <div  className="desc">
                <a href="#"  className="title">Gray Coffee Cup</a>
                <div  className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>

        <div  className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
          <div  className="single-search-product-wrapper">
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-1.png" alt=""></img></a>
              <div  className="desc">
                  <a href="#"  className="title">Gray Coffee Cup</a>
                  <div  className="price">$170.00</div>
              </div>
            </div>
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-2.png" alt=""></img></a>
              <div  className="desc">
                <a href="#"  className="title">Gray Coffee Cup</a>
                <div  className="price">$170.00</div>
              </div>
            </div>
            <div  className="single-search-product d-flex">
              <a href="#"><img src="/aromaStyle/img/product/product-sm-3.png" alt=""></img></a>
              <div  className="desc">
                <a href="#"  className="title">Gray Coffee Cup</a>
                <div  className="price">$170.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
	</section>

       

        </React.Fragment>
)
}