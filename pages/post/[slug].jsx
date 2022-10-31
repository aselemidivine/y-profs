import styles from '../../styles/post.module.css';
// import { imageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';

export const Post = ({ title, body, image }) => {
    console.log(title, body, image);
    const [imageUrl, setimageUrl ] = useState('');

    useEffect(() => {
        const imgBuilder = imageUrlBuilder({
            projectId: 'nt8zwiut',
            dataset: 'production',
        });
        setimageUrl(imgBuilder.image(image));
    }, [image]);
    return (
        <div>
            <div className={styles.mainn}>
                <h1> {title} </h1>
                    {imageUrl && <img className = {styles.mainImage} src={imageUrl}/>}
                    <div className={styles.body}>
                        <BlockContent blocks={body} />
                    </div>
            </div>
        </div>
    );
};


export const getServerSideProps =  async pageContext => {
    const pageSlug = pageContext.query.slug;

    if(!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
    const url = `https://nt8zwiut.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const post = result.result[0];

    if (!post) {
        return {
            notFound: true
        }
        
    }   else {
            return {
                props: {
                    body: post.body,
                    title: post.title,
                    image: post.mainImage
                }
            }
        }
    

};


export default Post;