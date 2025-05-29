import PodcastCard from '../../ui/podcastCard/PodcastCard'
import './podcasts.css'
import { ChevronRight ,ChevronLeft ,EllipsisVertical } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Podcasts = () => {
    const [currentPodcasts, setCurrentPodcasts] = useState([]);
    const { podcasts, isLoading, error, searchTerm } = useSelector((state) => state.results);
    
    const defaultPodcasts = [
        {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/fa/cf/81/facf8123-54f3-caeb-8779-dc090bad60c1/mza_3145696609880249843.jpg/100x100bb.jpg",
            artistName: "ثمانية/ thmanyah",
            collectionName: "فنجان مع عبدالرحمن أبومالح",
            trackName: "فنجان مع عبدالرحمن أبومالح",
            collectionCensoredName: "فنجان مع عبدالرحمن أبومالح",
            trackCensoredName: "فنجان مع عبدالرحمن أبومالح"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/98/97/28/9897282d-bb7d-feeb-bf6f-00a4bb611111/mza_18000155324632409016.jpg/100x100bb.jpg",
            artistName: "بسمة الحفناوى",
            collectionName: "الحياة بين كتاب و فنجان",
            trackName: "الحياة بين كتاب و فنجان",
            collectionCensoredName: "الحياة بين كتاب و فنجان",
            trackCensoredName: "الحياة بين كتاب و فنجان"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/fc/d3/f5/fcd3f516-7dd2-be49-7064-449b0a449f80/mza_15023436594288686065.jpg/100x100bb.jpg",
            artistName: "Galal Al-Emadi",
            collectionName: "فنجان قهوة - الحلقة الأولى",
            trackName: "فنجان قهوة - الحلقة الأولى",
            collectionCensoredName: "فنجان قهوة - الحلقة الأولى",
            trackCensoredName: "فنجان قهوة - الحلقة الأولى"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/ec/82/fd/ec82fd45-8910-540e-a55f-932385ee0c0f/mza_1263984884139691490.jpg/100x100bb.jpg",
            artistName: "Bothaina Al Ansari",
            collectionName: "فنجان مع بثينة الأنصاري",
            trackName: "فنجان مع بثينة الأنصاري",
            collectionCensoredName: "فنجان مع بثينة الأنصاري",
            trackCensoredName: "فنجان مع بثينة الأنصاري"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/ab/fd/a3/abfda32e-310f-f7c5-c166-14c00f4fc296/mza_929765518307251621.jpg/100x100bb.jpg",
            artistName: "بودكاست فنجان",
            collectionName: "بودكاست فنجان",
            trackName: "بودكاست فنجان",
            collectionCensoredName: "بودكاست فنجان",
            trackCensoredName: "بودكاست فنجان"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/e7/34/40/e73440b3-1310-5e40-c5fe-0980bc679129/mza_14393440113986465620.png/100x100bb.jpg",
            artistName: "Hadi Vahid",
            collectionName: "یک فنجان گفت و گو با طعم زندگی",
            trackName: "یک فنجان گفت و گو با طعم زندگی",
            collectionCensoredName: "یک فنجان گفت و گو با طعم زندگی",
            trackCensoredName: "یک فنجان گفت و گو با طعم زندگی"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a7/9f/2e/a79f2e79-e120-e852-4cb4-acb96fffa080/mza_14799695798107036816.jpg/100x100bb.jpg",
            artistName: "Jehan Kassem",
            collectionName: "فنجان قهوه مع جيهان",
            trackName: "فنجان قهوه مع جيهان",
            collectionCensoredName: "فنجان قهوه مع جيهان",
            trackCensoredName: "فنجان قهوه مع جيهان"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/6c/ca/44/6cca44e3-87c9-f469-acc5-2552eb6a2df8/mza_5288461092824874035.jpg/100x100bb.jpg",
            artistName: "Seyed Ali Khoee",
            collectionName: "یک فنجان حال خوب",
            trackName: "یک فنجان حال خوب",
            collectionCensoredName: "یک فنجان حال خوب",
            trackCensoredName: "یک فنجان حال خوب"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/48/56/34/48563462-3e6c-3277-067f-29e4d090488b/mza_9229657303287316088.jpg/100x100bb.jpg",
            artistName: "عائشة اشفيعي",
            collectionName: "فنجان مع عائشة",
            trackName: "فنجان مع عائشة",
            collectionCensoredName: "فنجان مع عائشة",
            trackCensoredName: "فنجان مع عائشة"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/30/ec/2f/30ec2fa4-29d3-74f3-d564-4f024dc748e7/mza_13410001083509074453.png/100x100bb.jpg",
            artistName: "fcsimedia",
            collectionName: "هات نحكي عَ فنجان قهوة - LTOC",
            trackName: "هات نحكي عَ فنجان قهوة - LTOC",
            collectionCensoredName: "هات نحكي عَ فنجان قهوة - LTOC",
            trackCensoredName: "هات نحكي عَ فنجان قهوة - LTOC"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/cb/15/a0/cb15a092-858d-6ff7-ee69-dd17acfddadf/mza_11932272977094685210.jpg/100x100bb.jpg",
            artistName: "Omar Eldeep",
            collectionName: "فنجان قهوة",
            trackName: "فنجان قهوة",
            collectionCensoredName: "فنجان قهوة",
            trackCensoredName: "فنجان قهوة"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/a4/b1/a9/a4b1a99b-ef61-e25d-4499-74af438f7be2/mza_7259718950045162818.jpg/100x100bb.jpg",
            artistName: "Abolfazl Hasanzade",
            collectionName: "A Cup Of Podcast || یک فنجان پادکست",
            trackName: "A Cup Of Podcast || یک فنجان پادکست",
            collectionCensoredName: "A Cup Of Podcast || یک فنجان پادکست",
            trackCensoredName: "A Cup Of Podcast || یک فنجان پادکست"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/d3/1a/9f/d31a9fdd-6cdc-19b1-d35e-08c2a2d26dfa/mza_16520346025620050758.jpeg/100x100bb.jpg",
            artistName: "kamyar maleki",
            collectionName: "از گیلاس قهوه تا فنجان",
            trackName: "از گیلاس قهوه تا فنجان",
            collectionCensoredName: "از گیلاس قهوه تا فنجان",
            trackCensoredName: "از گیلاس قهوه تا فنجان"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/96/02/8a/96028a22-8718-07e0-3738-3280ba4b9f44/mza_5812140423884542373.png/100x100bb.jpg",
            artistName: "Kero Ragy",
            collectionName: "أفكار مع فنجان القهوة",
            trackName: "أفكار مع فنجان القهوة",
            collectionCensoredName: "أفكار مع فنجان القهوة",
            trackCensoredName: "أفكار مع فنجان القهوة"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/f6/36/e7/f636e7b2-cf2c-e231-2912-04ea3891472b/mza_12847021410863666887.jpg/100x100bb.jpg",
            artistName: "Mohammad",
            collectionName: "یک فنجان قهوه",
            trackName: "یک فنجان قهوه",
            collectionCensoredName: "یک فنجان قهوه",
            trackCensoredName: "یک فنجان قهوه"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/15/8e/e3/158ee338-c261-051b-c1eb-02a3e1fdcda4/mza_13394181910918979074.jpg/100x100bb.jpg",
            artistName: "Sanaz Eghtesadinia",
            collectionName: "کافه یک فنجان آرامش",
            trackName: "کافه یک فنجان آرامش",
            collectionCensoredName: "کافه یک فنجان آرامش",
            trackCensoredName: "کافه یک فنجان آرامش"
          },
          {
            artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/98/30/fc/9830fcb7-c66d-1365-fd84-17ee4a35a3f3/mza_14112617139457161796.jpg/100x100bb.jpg",
            artistName: "Mariam Fathi",
            collectionName: "فنجان و قهوة مع مريم فتحي",
            trackName: "فنجان و قهوة مع مريم فتحي",
            collectionCensoredName: "فنجان و قهوة مع مريم فتحي",
            trackCensoredName: "فنجان و قهوة مع مريم فتحي"
          }
    ];
    
    useEffect(() => {
        setCurrentPodcasts(defaultPodcasts);
    }, []);

    useEffect(() => {
        if (Array.isArray(podcasts) && podcasts.length > 0) {
            setCurrentPodcasts(podcasts);
        }
    }, [podcasts]);

    return (
        <div className='podcasts-section'>
            <div className="about-result">
                <h1>نتائج البودكاست المتعلقة بـ "{searchTerm}"</h1>
            </div>
            <div className="podcast-container">
                <div className="podcast-results">
                    {isLoading ? (
                        <div>جاري التحميل...</div>
                    ) : error ? (
                        <div>حدث خطأ: {error}</div>
                    ) : (
                        currentPodcasts.map((podcast) => (
                            <PodcastCard 
                                key={podcast.trackId || podcast.collectionName} 
                                artistName={podcast.artistName} 
                                collectionName={podcast.collectionName} 
                                artworkUrl100={podcast.artworkUrl100} 
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
 

}

export default Podcasts





