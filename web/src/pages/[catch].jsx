import Custom404 from './404'

// https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
export const config = { runtime: 'edge' }

export default function CatchAllRoutes({url}) {
    return <Custom404 />
}

export async function getServerSideProps(context) {
    const url = context.query.catch;
    const { res } = context;
    if (url !== url.toLowerCase()) {
        res.writeHead(308, {location: `/${url.toLowerCase()}`}) // 307 is temporary while 308 is permanent, choose your preference here..
        res.end();
    }
    else {
        context.res.statusCode = 404;
    }
    return { props: { url } }; // Note: You don't need a prop, but the name of function requires one..
}
