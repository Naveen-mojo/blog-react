import * as React from "react";
import OwlCarousel from "react-owl-carousel";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../component/Loader";
import EndMsg from "../component/EndMsg";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import SearchController from "../controller/SearchController";
import { Helmet } from "react-helmet";

function Home(props) {
  const data = props.items;
  const carouselData = props.carousel;
  const loading = props.loading;
  const category = props.category;


  var options1 = {
    items: 1,
    margin: 0,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    navText: [
      '<i class="mdicon mdicon-arrow_back"></i>',
      '<i class="mdicon mdicon-arrow_forward"></i>',
    ],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  var options2 = {
    items: 2,
    loop: true,
    nav: true,
    dots: true,
    autoWidth: true,
    smartSpeed: 700,
    margin: 0,
    autoplay: true,
    navText: [
      '<i class="mdicon mdicon-arrow_back"></i>',
      '<i class="mdicon mdicon-arrow_forward"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        autoWidth: false,
      },
      768: {
        margin: 0,
        autoWidth: true,
      },
      992: {
        margin: 0,
      },
      1200: {
        margin: 0,
      },
      1450: {
        margin: 0,
      },
      1500: {
        margin: 0,
      },
      1671: {
        margin: 0,
      },
    },
  };

  var options3 = {
    margin: 30,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="14.733" viewBox="0 0 21 14.733"><defs><style>.a{opacity:0.4;}.b{fill:none;stroke:#111;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g class="a" transform="translate(21 17.533) rotate(180)"><line class="b" x2="20" transform="translate(0.5 10.167)"/><path class="b" d="M10.5,3.5l5,6.667-5,6.667" transform="translate(5 0)"/></g></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="14.733" viewBox="0 0 21 14.733"><defs><style>.a{fill:none;stroke:#222;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style></defs><g transform="translate(0 -2.8)"><line class="a" x2="20" transform="translate(0.5 10.167)"/><path class="a" d="M10.5,3.5l5,6.667-5,6.667" transform="translate(5 0)"/></g></svg>',
    ],
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
      },

      992: {
        items: 3,
      },
    },
  };

  // const min = 1;
  // const max = 100;
  // const initialData = Math.ceil(min + Math.random() * (max - min))

  const pageUrl = useLocation();
  const monsterSearch = props.monsterSearch;

  if (pageUrl.search === "") {
    return (
      <>
        <Helmet>
          <title>Home</title>
          <meta name="desciption" content="Home Page of Blog App" />
        </Helmet>
        {props.categoryloader ? (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div id="site-content" className="site-content">
            <div
              id="atbs_feature_slider_4-623810b590844"
              className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-feature-slider-d atbs-block--contiguous"
            >
              <div className="atbs-block__inner">
                <OwlCarousel
                  {...options1}
                  id="atbs_carousel-623810b590f10"
                  className="owl-refresh owl-theme owl-carousel js-atbs-carousel-only-1i-loop atbs-carousel dots-circle nav-circle"
                >
                  {carouselData.map((curValue, index) => {
                    if (carouselData.length > 1) {
                      return (
                        <div className="slide-content item" key={index}>
                          <article
                            className="post post--vertical post--vertical-text-wrap post__thumb-700"
                            data-dark-mode="true"
                          >
                            <div className="post__thumb atbs-thumb-object-fit">
                              <Link to={`/${curValue.PostSlug}`}>
                                {
                                  (`${curValue.PostThumbUrl}` !== 'null') ?
                                    <img width={1920} height={1125} src={curValue.PostThumbUrl} className="attachment-atbs-m-2_1 size-atbs-m-2_1 wp-post-image" alt="post img" sizes="(max-width: 1920px) 100vw, 1920px" />
                                    :
                                    <img width={1920} height={1125} src={curValue.PostThumb} className="attachment-atbs-m-2_1 size-atbs-m-2_1 wp-post-image" alt="details img" sizes="(max-width: 1920px) 100vw, 1920px" />

                                }
                              </Link>
                            </div>
                            <div className="post__text">
                              <div className="post__meta post-time-cat-wrap">
                                <Link
                                  className="cat-6 post__cat post__cat--bg cat-theme-bg"
                                  to={`/${curValue.PostSlug}`}
                                >
                                  {category[curValue.CatId].termName}
                                </Link>
                                <span className="time-wrap">
                                  <time
                                    className="time published"
                                    dateTime="2019-10-29T10:46:00+00:00"
                                    title={moment(curValue.CreationDate).format(
                                      "MMMM Do YYYY"
                                    )}
                                  >
                                    {moment(curValue.CreationDate).format(
                                      "MMMM Do YYYY"
                                    )}
                                  </time>
                                </span>
                              </div>
                              <div className="post__text--wrap flexbox clearfix">
                                <h3 className="post__title typescale-3_5 line-limit-child line-limit-3">
                                  <Link to={`/${curValue.PostSlug}`}>
                                    {curValue.PostTitle}
                                  </Link>
                                </h3>
                                <div className="post__excerpt flexbox__item">
                                  <div className="excerpt">
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          curValue.PostContent.replace(
                                            /(<([^>]+)>)/gi,
                                            ""
                                          ).slice(0, 110) + "...",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      );
                    }
                  })}
                </OwlCarousel>
              </div>
            </div>
            <div
              id="atbs_posts_grid_3-623810b591e7d"
              className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-post--grid-c "
            >
              <div className="container">
                <div className="block-heading block-heading--style-1 block-heading--has-button">
                  <h4 className="block-heading__title">Recent Post</h4>
                  <Link
                    to={`category/videos`}
                    target="_blank"
                    className="view-all-btn"
                  >
                    See all
                  </Link>
                </div>
              </div>
              {/* .container */}
              <div className="container">
                <div className="atbs-block__inner">
                  <div className="posts-list">
                    {props.recentPost.map((curValue, index) => {
                      return (
                        <div className="list-item" key={index}>
                          <article
                            className="post post--no-thumb post-no-thumb-not-readmore hover-text-color-white"
                            data-dark-mode="true"
                          >
                            <div className="post__text">
                              <div className="post__meta post-time-cat-wrap">
                                <Link
                                  className="cat-4 post__cat post__cat--bg cat-theme-bg"
                                  to={`category/videos`}
                                >
                                  {category[curValue.CatId].termName}
                                </Link>
                                <span className="time-wrap">
                                  <time
                                    className="time published"
                                    dateTime="2019-10-18T08:41:13+00:00"
                                    title={moment(curValue.CreationDate).format(
                                      "MMMM Do YYYY, h:mm:ss a"
                                    )}
                                  >
                                    {moment(curValue.CreationDate).format(
                                      "MMMM Do YYYY"
                                    )}
                                  </time>
                                </span>
                              </div>
                              <h3 className="post__title typescale-1 line-limit-child line-limit-3">
                                <Link to={`/${curValue.PostSlug}`}>
                                  {curValue.PostTitle}
                                </Link>
                              </h3>
                              {/* <div className="post__meta">
                                                                    <div className="entry-author entry-author-has-avatar post-author author-circle">
                                                                        <Link className="post-author__avatar" to={`/${curValue.PostSlug}`}><img alt="admin" src={admin} srcSet="https://secure.gravatar.com/avatar/e7ea5bdbee1c7e6d2f0517eb9dfd5595?s=100&d=mm&r=g 2x" className="avatar avatar-50 photo author-avatar" height={50} width={50} loading="lazy" /></Link>
                                                                        <div className="post-author__text">
                                                                            <span className="hint-span">By</span><a className="post-author__name" href="https://atom.bk-ninja.com/technology/author/admin/">admin</a>
                                                                        </div>
                                                                    </div><span className="post__comment entry-comment"><a title="0 Comments" href="https://atom.bk-ninja.com/technology/choosing-my-own-adventure/"><i className="mdicon mdicon-comment-o" />0</a></span>
                                                                </div> */}
                            </div>
                          </article>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* <div id="atbs_posts_grid_7-623810b5931b9" className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-post--grid-g  atbs-block--has-bg">
                            <div className="container">
                                <div className="atbs-block__inner">
                                    <div className="post-main">
                                        <div className="list-item">
                                            <article className="post post--horizontal post--horizontal-video-text-top-right post__thumb-465 clearfix" data-dark-mode="true">
                                                <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                    <a href="https://atom.bk-ninja.com/technology/the-tattoo-taboo-for-the-asian-woman/"><img width={800} height={600} src="assets/img/13-800x600.jpg" className="attachment-atbs-m-4_3 size-atbs-m-4_3 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-800x600.jpg 800w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-300x225.jpg 300w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-1024x769.jpg 1024w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-768x577.jpg 768w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-1536x1154.jpg 1536w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-180x135.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-400x300.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-600x450.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-1200x900.jpg 1200w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-1600x1200.jpg 1600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13.jpg 1920w" sizes="(max-width: 800px) 100vw, 800px" /></a> 
                                                </div>
                                                <div className="post__text">
                                                    <div className="post__meta post-time-cat-wrap">
                                                        <a className="cat-2 post__cat post__cat--bg cat-theme-bg" href="https://atom.bk-ninja.com/technology/category/news/">News</a>
                                                        <span className="time-wrap"><time className="time published" dateTime="2019-10-18T08:28:56+00:00" title="October 18, 2019 at 8:28 am">October 18, 2019</time></span>
                                                    </div>
                                                    <h3 className="post__title post__title typescale-3 line-limit-child line-limit-3">
                                                        <a href="https://atom.bk-ninja.com/technology/the-tattoo-taboo-for-the-asian-woman/">Keep
                                                            your eyes on the stars and your feet on the ground.</a>
                                                    </h3>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="post-sub"><a className="posts-navigation__label" href="https://atom.bk-ninja.com/technology/the-tattoo-taboo-for-the-asian-woman/"><span>Next
                                        Article</span></a>
                                        <div className="list-item">
                                            <article className="post post--vertical post--vertical-video-small post__thumb-150" data-dark-mode="true">
                                                <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                    <a href="https://atom.bk-ninja.com/technology/impossibly-high-beauty-standards-are-ruining-my-self-esteem/"><img width={400} height={300} src="assets/img/4-400x300.jpg" className="attachment-atbs-xs-4_3 size-atbs-xs-4_3 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-400x300.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-180x135.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-600x450.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-800x600.jpg 800w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-1200x900.jpg 1200w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/4-1600x1200.jpg 1600w" sizes="(max-width: 400px) 100vw, 400px" /></a> 
                                                </div>
                                                <div className="post__text">
                                                    <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                        <a href="https://atom.bk-ninja.com/technology/impossibly-high-beauty-standards-are-ruining-my-self-esteem/">You
                                                            must be the change you wish to see in world.</a>
                                                    </h3>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            <div
              id="atbs_block_listing_grid_5-623810b593f2e"
              className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-post--listing-grid-5 atbs-post--listing-grid-5-no-sidebar "
            >
              <div className="container">
                <div className="atbs-block__inner">
                  <div className="posts-list flexbox-wrap flexbox-wrap-3i">
                    {props.post3.map((curValue, index) => {
                      return (
                        <div className="list-item" key={index}>
                          <article
                            className="post post--overlay post--overlay-style-card post--overlay-md post--overlay-padding-lg"
                            data-dark-mode="true"
                          >
                            <div className="post__thumb post__thumb--overlay background-img background-img--darkened post__thumb--overlay atbs-thumb-object-fit background-img-dots-circle">
                              <Link to={`/${curValue.PostSlug}`}>
                                {
                                  (`${curValue.PostThumbUrl}` !== 'null') ?
                                    <img width={600} height={600} src={curValue.PostThumbUrl} className="attachment-atbs-m-2_1 size-atbs-m-2_1 wp-post-image" alt="post img" sizes="(max-width: 600px) 100vw, 600px" />
                                    :
                                    <img width={600} height={600} src={curValue.PostThumb} className="attachment-atbs-m-2_1 size-atbs-m-2_1 wp-post-image" alt="details img" sizes="(max-width: 600px) 100vw, 600px" />

                                }
                              </Link>
                            </div>
                            <div className="post__text">
                              <div className="post__text-wrap">
                                <div className="post__text-inner flexbox-wrap flexbox-wrap-direction-column">
                                  <div className="post__meta date-stamp">
                                    <Link
                                      className="cat-5 post__cat cat-theme"
                                      to={`/${curValue.PostSlug}`}
                                    >
                                      Review
                                    </Link>
                                    <span className="time-wrap">
                                      <time
                                        className="time published"
                                        dateTime={moment(
                                          curValue.CreationDate
                                        ).format("MMMM Do YYYY, h:mm:ss a")}
                                        title={moment(
                                          curValue.CreationDate
                                        ).format("MMMM Do YYYY , h:mm:ss a")}
                                      >
                                        {moment(curValue.CreationDate).format(
                                          "Do"
                                        )}
                                        <span>
                                          {moment(curValue.CreationDate).format(
                                            "MMMM"
                                          )}
                                        </span>
                                      </time>
                                    </span>
                                  </div>
                                  <h3 className="post__title typescale-2">
                                    <Link to={`/${curValue.PostSlug}`}>
                                      {curValue.PostTitle}
                                    </Link>
                                  </h3>
                                  <div className="post__excerpt  ">
                                    <div className="excerpt">
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            curValue.PostContent.replace(
                                              /(<([^>]+)>)/gi,
                                              ""
                                            ).slice(0, 70) + "...",
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="post__readmore flexbox-space-y-bottom">
                                    <Link
                                      to={`/${curValue.PostSlug}`}
                                      className="button__readmore"
                                    >
                                      <span className="readmore__text">
                                        Read more
                                        <i className="mdicon mdicon-navigate_next" />
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Link
                              to={`/${curValue.PostSlug}`}
                              className="link-overlay"
                            />
                          </article>
                        </div>
                      );
                    })}
                  </div>
                  {/* .posts-list */}
                </div>
                {/* .atbs-block__inner */}
              </div>
              {/* .container */}
            </div>
            {/* .atbs-block */}
            <div
              id="atbs_feature_slider_3-623810b596cbc"
              className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-feature-slider-c "
            >
              <div className="atbs-block__inner">
                <OwlCarousel
                  {...options2}
                  id="atbs_carousel-623810b5973c6"
                  className="owl-carousel js-carousel-2i-auto-width atbs-carousel dots-circle"
                >
                  {props.carouselPost2.map((curValue, index) => {
                    return (
                      <div className="slide-content" key={index}>
                        <article
                          className="post post--horizontal post--horizontal-fullwidth-large"
                          data-dark-mode="true"
                        >
                          <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                            <Link to={`/${curValue.PostSlug}`}>
                              {
                                (`${curValue.PostThumbUrl}` !== 'null') ?
                                  <img width={1920} height={1125} src={curValue.PostThumbUrl} className="attachment-atbs-m-2_1 size-atbs-m-2_1 wp-post-image" alt="post img" sizes="(max-width: 1925px) 100vw, 1125px" />
                                  :
                                  <img width={1920} height={1125} src={curValue.PostThumb} className="attachment-atbs-m-2_1 size-atbs-m-2_1 wp-post-image" alt="details img" sizes="(max-width: 1925px) 100vw, 1125px" />

                              }
                            </Link>{" "}
                            {/* close a tag */}
                          </div>
                          <div className="post__text">
                            <div className="post__meta post-time-cat-wrap">
                              <Link
                                className="cat-7 post__cat post__cat--bg cat-theme-bg"
                                to={`/${curValue.PostSlug}`}
                              >
                                {category[curValue.CatId].termName}
                              </Link>
                              <span className="time-wrap">
                                <time
                                  className="time published"
                                  dateTime="2019-10-18T08:15:15+00:00"
                                  title={moment(curValue.CreationDate).format(
                                    "MMMM Do YYYY"
                                  )}
                                >
                                  {moment(curValue.CreationDate).format(
                                    "MMMM Do YYYY"
                                  )}
                                </time>
                              </span>
                            </div>
                            <h3 className="post__title typescale-4 line-limit-child line-limit-3">
                              <Link to={`/${curValue.PostSlug}`}>
                                {curValue.PostTitle}
                              </Link>
                            </h3>
                            <div className="post__excerpt  flexbox__item">
                              <div className="excerpt">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      curValue.PostContent.replace(
                                        /(<([^>]+)>)/gi,
                                        ""
                                      ).slice(0, 110) + "...",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="post__readmore">
                              <Link
                                to={`/${curValue.PostSlug}`}
                                className="button__readmore"
                              >
                                <span className="readmore__text">
                                  Read more
                                  <i className="mdicon mdicon-navigate_next" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </OwlCarousel>
                {/* .atbs-carousel */}
              </div>
              {/* .atbs-block__inner */}
            </div>
            {/* .atbs-block */}
            <div
              id="atbs_posts_carousel_1-623810b59846c"
              className="atbs-block atbs-block--fullwidth atbs-block-custom-margin atbs-carousel-grid "
              style={{ postBackgroundColor: "#2a2a2a" }}
            >
              <div className="container">
                <div className="block-heading block-heading--style-1 block-heading--has-button">
                  <h4 className="block-heading__title">Most Post</h4>
                  <Link
                    to={`category/videos`}
                    target="_blank"
                    className="view-all-btn"
                  >
                    See all
                  </Link>
                </div>
              </div>
              {/* .container */}
              <div className="container">
                <div className="atbs-block__inner">
                  <OwlCarousel
                    {...options3}
                    id="atbs_carousel-623810b598c3a"
                    className="owl-carousel js-carousel-3i30m-nav-svg atbs-carousel dots-circle"
                  >
                    {props.carouselPost3.map((curValue, index) => {
                      return (
                        <div className="slide-content" key={index} tabIndex={0}>
                          <article
                            className="post post--overlay post--overlay-background-hover post-thumb-radius post--overlay-height-270"
                            data-dark-mode="false"
                          >
                            <div className="post__thumb post__thumb--overlay atbs-thumb-object-fit post-thumb-radius background-img background-img--darkened background-img-dots-circle">
                              <Link to={`/${curValue.PostSlug}`}>
                                {
                                  (`${curValue.PostThumbUrl}` !== 'null') ?
                                    <img width={600} height={450} src={curValue.PostThumbUrl} className="attachment-atbs-m-2_1 size-atbs-m-2_1 wp-post-image" alt="post img" sizes="(max-width: 600px) 100vw, 800px" />
                                    :
                                    <img width={600} height={450} src={curValue.PostThumb} className="attachment-atbs-m-2_1 size-atbs-m-2_1 wp-post-image" alt="details img" sizes="(max-width: 600px) 100vw, 800px" />

                                }
                              </Link>
                            </div>
                            <div className="post__text inverse-text">
                              <div className="post__text-wrap">
                                <div className="post__text-inner">
                                  <div className="post__meta post-time-cat-wrap">
                                    <Link
                                      className="cat-7 post__cat post__cat--bg cat-theme-bg"
                                      to={`category/videos`}
                                    >
                                      {category[curValue.CatId].termName}
                                    </Link>
                                    <span className="time-wrap">
                                      <time
                                        className="time published"
                                        dateTime="2019-10-18T08:10:33+00:00"
                                        title={moment(
                                          curValue.CreationDate
                                        ).format("MMMM Do YYYY")}
                                      >
                                        {moment(curValue.CreationDate).format(
                                          "MMMM Do YYYY"
                                        )}
                                      </time>
                                    </span>
                                  </div>
                                  <h3 className="post__title typescale-2 custom-typescale-2 line-limit-child line-limit-3">
                                    <Link to={`/${curValue.PostSlug}`}>
                                      {curValue.PostTitle}
                                    </Link>
                                  </h3>
                                  <div className="post__footer">
                                    <div className="post__meta">
                                      <div className="post-author post-author--style-1">
                                        {/* <div className="post-author__text">
                                                                                    <span className="hint-span">By</span>
                                                                                    <a className="post-author__name" href="https://atom.bk-ninja.com/technology/author/admin/">admin</a>
                                                                                </div> */}
                                      </div>
                                      <div className="post__readmore post__readmore-right icon-circle-50">
                                        <Link
                                          to={`/${curValue.PostSlug}`}
                                          className="button__readmore"
                                        >
                                          <span className="readmore__text">
                                            Read more{" "}
                                            <i className="mdicon mdicon-navigate_next" />
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Link
                              to={`/${curValue.PostSlug}`}
                              className="link-overlay"
                            />
                          </article>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
              </div>
              {/* .container */}
            </div>
            {/* .atbs-block */}
            <div className="atbs-layout-split atbs-block atbs-block--fullwidth">
              <InfiniteScroll
                dataLength={props.items.length} //This is important field to render the next data
                next={props.fetchData}
                hasMore={props.hasMore}
                loader={<Loader />}
                endMessage={<EndMsg />}
              >
                <div className="container">
                  <div className="row">
                    <div className="atbs-main-col " role="main">
                      <div
                        id="atbs_block_listing_grid_1_has_sidebar-623810b599cb2"
                        className="atbs-block atbs-block-custom-margin listing-grid-1-has-sidebar "
                      >
                        <div className="atbs-block__inner">
                          <div className="posts-list posts-list-2i flexbox-wrap flexbox-wrap-2i flex-space-30">
                            {data.map((curValue) => {
                              return (
                                <div className="list-item" key={curValue.ID}>
                                  <article
                                    className="post post--vertical post--vertical-medium post__thumb-250 disable-thumb-placeholder"
                                    data-dark-mode="true"
                                  >
                                    <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                      <Link to={`/${curValue.PostSlug}`}>
                                        {
                                          (`${curValue.PostThumbUrl}` !== 'null') ?
                                            <img width={400} height={300} src={curValue.PostThumbUrl} className="attachment-atbs-m-2_1 size-atbs-m-2_1 wp-post-image" alt="post img" sizes="(max-width: 400px) 100vw, 400px" />
                                            :
                                            <img width={400} height={300} src={curValue.PostThumb} className="attachment-atbs-m-2_1 size-atbs-m-2_1 wp-post-image" alt="details img" sizes="(max-width: 400px) 100vw, 400px" />

                                        }
                                      </Link>
                                      {/* close a tag */}
                                    </div>
                                    <div className="post__text">
                                      <div className="post__meta post-time-cat-wrap">
                                        <Link
                                          className="cat-2 post__cat post__cat--bg cat-theme-bg"
                                          to={`category/videos`}
                                        >
                                          {category[curValue.CatId].termName}
                                        </Link>
                                        <span className="time-wrap">
                                          <time
                                            className="time published"
                                            dateTime="2019-10-18T08:02:29+00:00"
                                            title={moment(
                                              curValue.CreationDate
                                            ).format("MMMM Do YYYY")}
                                          >
                                            {moment(
                                              curValue.CreationDate
                                            ).format("MMMM Do YYYY")}
                                          </time>
                                        </span>
                                      </div>
                                      <h3 className="post__title typescale-2 line-limit-child line-limit-3">
                                        <Link to={`/${curValue.PostSlug}`}>
                                          {curValue.PostTitle}
                                        </Link>
                                      </h3>
                                      <div className="post__excerpt ">
                                        <div className="excerpt">
                                          <div
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                curValue.PostContent.replace(
                                                  /(<([^>]+)>)/gi,
                                                  ""
                                                ).slice(0, 110) + "...",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </article>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="atbs-sub-col atbs-sub-col--right js-sticky-sidebar"
                      role="complementary"
                    >
                      <div id="search-2" className="widget widget_search">
                        {`${monsterSearch.actionUrl}` === "null" ? (
                          <form
                            action="http://localhost:3000/"
                            className="search-form"
                          >
                            <input
                              type="text"
                              name="q"
                              value={props.search}
                              onChange={props.getSearchValue}
                              className="search-form__input"
                              placeholder="Search"
                            />
                            <button
                              type="submit"
                              className="search-form__submit"
                            >
                              <i className="mdicon mdicon-search" />
                            </button>
                          </form>
                        ) : (
                          <form
                            action={`${monsterSearch.actionUrl}`}
                            className="search-form"
                          >
                            <input
                              type="text"
                              name="q"
                              value={props.search}
                              onChange={props.getSearchValue}
                              className="search-form__input"
                              placeholder="Search"
                            />
                            <button
                              type="submit"
                              className="search-form__submit"
                            >
                              <i className="mdicon mdicon-search" />
                            </button>
                          </form>
                        )}
                      </div>
                      <div
                        id="bk_widget_posts_list-2"
                        className="widget atbs-widget"
                      >
                        <div className="atbs-widget atbs-widget-posts-4">
                          <div className="widget__title widget__title--style-1">
                            <h4 className="widget__title-text">Posts List</h4>
                          </div>
                          <div className="widget__inner">
                            <ul className="posts-list widget-posts-list-style-1 list-space-md list-seperated list-unstyled">
                              {data.map((curValue) => {
                                return (
                                  <li className="list-item" key={curValue.ID}>
                                    <article
                                      className="post post--no-thumb post-no-thumb"
                                      data-dark-mode="true"
                                    >
                                      <div className="post__text">
                                        <div className="post__meta post-time-cat-wrap">
                                          <Link
                                            className="cat-6 post__cat cat-theme"
                                            to={`category/videos`}
                                          >
                                            {category[curValue.CatId].termName}
                                          </Link>
                                          <span className="time-wrap">
                                            <time
                                              className="time published"
                                              dateTime={moment(
                                                curValue.CreationDate
                                              ).format("MMMM Do YYYY")}
                                              title={moment(
                                                curValue.CreationDate
                                              ).format("MMMM Do YYYY")}
                                            >
                                              {moment(
                                                curValue.CreationDate
                                              ).format("MMMM Do YYYY")}
                                            </time>
                                          </span>
                                        </div>
                                        <div className="post__text--wrap">
                                          <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                            <Link to={`/${curValue.PostSlug}`}>
                                              {curValue.PostTitle}
                                            </Link>
                                          </h3>
                                          <div className="post__readmore button-readmore-no-text">
                                            <Link
                                              to={`/${curValue.PostSlug}`}
                                              className="button__readmore"
                                            >
                                              <span className="readmore__text">
                                                <i className="mdicon mdicon-navigate_next" />
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </article>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                        {/* End Widget Module*/}
                      </div>
                      {/* <div id="bk_widget_review_list-2" className="widget atbs-widget">
                                                <div className="atbs-widget-reviews-list">
                                                    <div className="widget__title widget__title--style-1">
                                                        <h4 className="widget__title-text">Review Post</h4>
                                                    </div>
                                                    <div className="widget__inner">
                                                        <ul className="posts-list widget-posts-list-style-1 list-space-md list-unstyled">
                                                            <li className="list-item">
                                                                <article className="post post--horizontal post--horizontal post--horizontal-xxs post--horizontal-score-star" data-dark-mode="true">
                                                                    <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                                        <a href="https://atom.bk-ninja.com/technology/tomorrow-is-often-the-busiest-day-of-the-week/"><img width={180} height={180} src="assets/img/32-180x180.jpg" className="attachment-atbs-xxs-1_1 size-atbs-xxs-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-800x800.jpg 800w" sizes="(max-width: 180px) 100vw, 180px" /></a>
                                                                        
                                                                    </div>
                                                                    <div className="post__text">
                                                                        <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                                            <a href="https://atom.bk-ninja.com/technology/tomorrow-is-often-the-busiest-day-of-the-week/">Tomorrow
                                                                                is Often the Busiest Day of the Week</a>
                                                                        </h3>
                                                                        <div className="post-score-star">
                                                                            <span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star_half" />
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                            <li className="list-item">
                                                                <article className="post post--horizontal post--horizontal post--horizontal-xxs post--horizontal-score-star" data-dark-mode="true">
                                                                    <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                                        <a href="https://atom.bk-ninja.com/technology/ukraine%e2%80%8a-%e2%80%8aa-brief-guide-to-travelling-in-the-country/"><img width={180} height={180} src="assets/img/13-180x180.jpg" className="attachment-atbs-xxs-1_1 size-atbs-xxs-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-800x800.jpg 800w" sizes="(max-width: 180px) 100vw, 180px" /></a>
                                                                       
                                                                    </div>
                                                                    <div className="post__text">
                                                                        <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                                            <a href="https://atom.bk-ninja.com/technology/ukraine%e2%80%8a-%e2%80%8aa-brief-guide-to-travelling-in-the-country/">How
                                                                                To Love Yourself, Even When No One Else Seems To</a>
                                                                        </h3>
                                                                        <div className="post-score-star">
                                                                            <span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star_half" />
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                    </div>
                  </div>
                </div>
              </InfiniteScroll>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return <SearchController category={category} catgeloader={props.categoryloader} />;
  }
}

export default Home;
