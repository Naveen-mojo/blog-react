import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

function Search(props) {
    const items = props.items;
    const itemsLength = items.length
    return (
        <>
            <div id="site-content" className="site-content">
                <div className="atbs-block atbs-block--fullwidth">
                    <div className="container">
                        <div className="block-heading page-heading block-heading--style-1">
                            <h2 className="block-heading__title page-heading__title">Search for: {props.search}</h2>
                            <div className="block-heading__subtitle page-heading__subtitle">There are {itemsLength} results</div>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="row"><div className="atbs-main-col " role="main">
                            <div id="atbs_block_listing_list_3_has_sidebar-62bacd4381c89" className="atbs-block">
                                <div className="atbs-post--listing-list-large atbs-post--listing-list-3">
                                    <div className="posts-list list-space-xxl">
                                        {
                                            items.map((curValue) => {
                                                return (
                                                    <div className="list-item" key={curValue.ID}>
                                                        <article className="post post--vertical list-large-post--vertical-large list-large-post--vertical-large-has-sidebar disable-thumb-placeholder" data-dark-mode="true">
                                                            <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                                                <Link to={`/${curValue.PostSlug}`}><img width={1200} height={600} src={curValue.PostThumbUrl} className="attachment-atbs-l-2_1 size-atbs-l-2_1 wp-post-image" alt="" sizes="(max-width: 1200px) 100vw, 1200px" /></Link></div>
                                                            <div className="post__text">
                                                                <div className="post__meta post-time-cat-wrap">
                                                                    <Link className="cat-6 post__cat post__cat--bg cat-theme-bg" to={`/category/videos`}>Videos</Link><span className="time-wrap"><time className="time published" dateTime={moment(curValue.CreationDate).format('MMMM Do YYYY')} title={moment(curValue.CreationDate).format('MMMM Do YYYY')}>{moment(curValue.CreationDate).format('MMMM Do YYYY')}</time></span></div>
                                                                <div className="post__text--wrap ">
                                                                    <h3 className="post__title ">
                                                                        <Link to={`/${curValue.PostSlug}`}>{curValue.PostTitle}</Link></h3>
                                                                    <div className="post__excerpt ">
                                                                        <div className="excerpt">
                                                                        <div dangerouslySetInnerHTML={{ __html: curValue.PostContent.replace(/(<([^>]+)>)/gi, "").slice(0, 110) + '...' }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>

                                {/* <div className="atbs-pagination">
                                    <h4 className="atbs-pagination__title sr-only">Posts navigation</h4>
                                    <div className="atbs-pagination__links text-right">
                                        <span className="atbs-pagination__item atbs-pagination__item-current">1</span>
                                        <a href="page/2/index2aa7.html?s=sea" className="atbs-pagination__item" title={2}>2</a>
                                        <a href="page/3/index2aa7.html?s=sea" className="atbs-pagination__item" title={3}>3</a>
                                        <span className="atbs-pagination__item atbs-pagination__dots">...</span>
                                        <a href="page/6/index2aa7.html?s=sea" className="atbs-pagination__item" title={6}>6</a>
                                        <a href="page/2/index2aa7.html?s=sea"><span className="atbs-pagination__item atbs-pagination__item-next">
                                            <i className="mdicon mdicon-arrow_forward" /></span>
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                            <div className="atbs-sub-col atbs-sub-col--right sidebar js-sticky-sidebar" role="complementary">
                                <div id="search-2" className="widget widget_search">
                                    <form className="search-form">
                                        <input type="text" value={props.search} onChange={props.getSearchValue} name="s" className="search-form__input" placeholder="Search" />
                                        <button type="submit" className="search-form__submit"><i className="mdicon mdicon-search" /></button>
                                    </form>
                                </div><div id="bk_widget_posts_list-2" className="widget atbs-widget">
                                    <div className="atbs-widget atbs-widget-posts-4">
                                        <div className="widget__title widget__title--style-1">
                                            <h4 className="widget__title-text">Posts List</h4>
                                        </div>
                                        <div className="widget__inner">
                                            <ul className="posts-list widget-posts-list-style-1 list-space-md list-seperated list-unstyled">
                                                {
                                                    items.map((curValue) => {
                                                        return (
                                                            <li className="list-item">
                                                                <article className="post post--no-thumb post-no-thumb" data-dark-mode="true">
                                                                    <div className="post__text">
                                                                        <div className="post__meta post-time-cat-wrap">
                                                                            <Link className="cat-6 post__cat cat-theme" to={`category/videos`}>Videos</Link><span className="time-wrap"><time className="time published" dateTime={moment(curValue.CreationDate).format('MMMM Do YYYY')} title={moment(curValue.CreationDate).format('MMMM Do YYYY')}>{moment(curValue.CreationDate).format('MMMM Do YYYY')}</time></span>                      </div>
                                                                        <div className="post__text--wrap">
                                                                            <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                                                                <Link to={`/${curValue.PostSlug}`}>{curValue.PostTitle}</Link></h3>
                                                                            <div className="post__readmore button-readmore-no-text"><Link to={`/${curValue.PostSlug}`} className="button__readmore"><span className="readmore__text"><i className="mdicon mdicon-navigate_next" /></span></Link></div>                  </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div id="bk_widget_review_list-2" className="widget atbs-widget"><div className="atbs-widget-reviews-list"><div className="widget__title widget__title--style-1"><h4 className="widget__title-text">Review Post</h4></div><div className="widget__inner"><ul className="posts-list widget-posts-list-style-1 list-space-md list-unstyled"><li className="list-item">            <article className="post post--horizontal post--horizontal post--horizontal-xxs post--horizontal-score-star" data-dark-mode="true">
                                    <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                        <a href="tomorrow-is-often-the-busiest-day-of-the-week/index.html"><img width={180} height={180} src="wp-content/uploads/2019/10/32-180x180.jpg" className="attachment-atbs-xxs-1_1 size-atbs-xxs-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2019/10/32-800x800.jpg 800w" sizes="(max-width: 180px) 100vw, 180px" /></a>                                       </div>
                                    <div className="post__text">
                                        <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                            <a href="tomorrow-is-often-the-busiest-day-of-the-week/index.html">Tomorrow is Often the Busiest Day of the Week</a>                  </h3>
                                        <div className="post-score-star">
                                            <span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star_half" />                      </div>
                                    </div>
                                </article>
                                </li>
                                <li className="list-item">            <article className="post post--horizontal post--horizontal post--horizontal-xxs post--horizontal-score-star" data-dark-mode="true">
                                    <div className="post__thumb atbs-thumb-object-fit post-thumb-radius">
                                        <a href="ukraine%e2%80%8a-%e2%80%8aa-brief-guide-to-travelling-in-the-country/index.html"><img width={180} height={180} src="wp-content/uploads/2021/04/13-180x180.jpg" className="attachment-atbs-xxs-1_1 size-atbs-xxs-1_1 wp-post-image" alt="" loading="lazy" srcSet="https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-180x180.jpg 180w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-150x150.jpg 150w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-400x400.jpg 400w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-600x600.jpg 600w, https://atom.bk-ninja.com/technology/wp-content/uploads/2021/04/13-800x800.jpg 800w" sizes="(max-width: 180px) 100vw, 180px" /></a>                                        </div>
                                    <div className="post__text">
                                        <h3 className="post__title typescale-0 custom-typescale-0 line-limit-child line-limit-3">
                                            <a href="ukraine%e2%80%8a-%e2%80%8aa-brief-guide-to-travelling-in-the-country/index.html">How To Love Yourself, Even When No One Else Seems To</a>                  </h3>
                                        <div className="post-score-star">
                                            <span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star" /><span className="mdicon mdicon-star_half" />                      </div>
                                    </div>
                                </article>
                                    </li></ul></div>  </div></div>    */}
                                                   </div> {/* .atbs-sub-col */}
                        </div>{/* .row */}      </div>{/* .container */}
                </div>{/* .atbs-block */}
            </div>
        </>
    )
}

export default Search