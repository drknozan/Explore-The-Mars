import PhotosContainer from "@/containers/PhotosContainer";
import getLastWeekDate from "@/helpers/getLastWeekDate";
import shuffleArray from "@/helpers/shuffleArray";

export default function RoverPhotos({ photos }) {

    return (
        <PhotosContainer photos={photos} />
    );
}

export async function getStaticProps() {
    const date = getLastWeekDate();

    try {
        const responses = await Promise.all([
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.NASA_API_KEY}&camera=navcam&page=1`).then((res) => res.json()),
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.NASA_API_KEY}&camera=fhaz&page=1`).then((res) => res.json()),
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.NASA_API_KEY}&camera=chemcam&page=1`).then((res) => res.json()),
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.NASA_API_KEY}&camera=mahli&page=1`).then((res) => res.json()),
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.NASA_API_KEY}&camera=mardi&page=1`).then((res) => res.json()),
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.NASA_API_KEY}&camera=rhaz&page=1`).then((res) => res.json()),
        ]);

        let photos = responses[0].photos.concat(responses[1].photos, responses[2].photos, responses[3].photos, responses[4].photos, responses[5].photos);

        photos = shuffleArray(photos);

        return {
            props: {
                photos
            },
            revalidate: 3600
        }
    } catch (error) {
        throw new Error("Internal server error");
    }
}