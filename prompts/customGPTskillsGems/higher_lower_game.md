# Prompts used to create a 'higher or lower' game

Go to Claude's Artifacts area and type this first prompt:

```
I want to create a 'higher or lower' game where people are shown images of two properties sold by their local council and have to guess whether the second property was sold for more or less than the first property.
The game should start with one property image where they have to guess the amount. The true amount is revealed, and then the second image shown. From that point each subsequent image is a guess of higher or lower.
The data for 5 properties is below. I also have 5 images, named with the UPRN

UPRN	address	Completion date	postcode	amount	date	StreetviewURL
110	Site of 33 Victoria Street, Cinderford GL14 2ET	10/11/2023	GL14 2ET	173000	10/11/2023	https://www.google.com/maps/place/Site+of,+33+Victoria+St,+Cinderford+GL14+2ET/@51.8225904,-2.5006214,194a,75y,276.86h,78.89t/data=!3m7!1e1!3m5!1sslyvZgzvOWMawEQ9F3lDZQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D11.111271669665456%26panoid%3DslyvZgzvOWMawEQ9F3lDZQ%26yaw%3D276.8614090876939!7i16384!8i8192!4m13!1m7!3m6!1s0x4871a56172d36b47:0x42ba869cb0f03b44!2sSite+of,+33+Victoria+St,+Cinderford+GL14+2ET!3b1!8m2!3d51.8226238!4d-2.500689!3m4!1s0x4871a56172d36b47:0x42ba869cb0f03b44!8m2!3d51.8226238!4d-2.500689?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D
592	Joys Green Centre Alternative Provision School, Lydbrook, Glos GL17 9QX	05/02/2025	GL17 9QX	250000	05/02/2025	https://www.google.com/maps/place/Joys+Green+Cp+School,+School+Rd,+Joys+Green,+Lydbrook+GL17+9QX/@51.8452078,-2.5765151,149a,75y,73.21h,90t/data=!3m7!1e1!3m5!1sRA9ATxxhIC_OsqThntrRgg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DRA9ATxxhIC_OsqThntrRgg%26yaw%3D73.2075!7i16384!8i8192!4m15!1m8!3m7!1s0x4871b05dff9e1065:0x1cd0a6743c17238b!2sJoys+Green+Cp+School,+School+Rd,+Joys+Green,+Lydbrook+GL17+9QX!3b1!8m2!3d51.8453119!4d-2.5760167!16s%2Fg%2F11rtc84_sv!3m5!1s0x4871b05dff9e1065:0x1cd0a6743c17238b!8m2!3d51.8453119!4d-2.5760167!16s%2Fg%2F11rtc84_sv?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D
1232	95 Bisley Old Road, Stroud GL5 1NL	24/02/2026	GL5 1NL	362250	24/02/2026	https://www.google.com/maps/place/Police+House,+95+Bisley+Old+Rd,+Stroud+GL5+1NL/@51.7446783,-2.1974945,174a,75y,345.15h,90t/data=!3m7!1e1!3m5!1shOwrGXqrmswut2zoemLgow!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DhOwrGXqrmswut2zoemLgow%26yaw%3D345.14594!7i16384!8i8192!4m15!1m8!3m7!1s0x48710c20fefa75e1:0x8f8fb2a2f4161d50!2sPolice+House,+95+Bisley+Old+Rd,+Stroud+GL5+1NL!3b1!8m2!3d51.7448572!4d-2.1975714!16s%2Fg%2F11pdl_k_04!3m5!1s0x48710c20fefa75e1:0x8f8fb2a2f4161d50!8m2!3d51.7448572!4d-2.1975714!16s%2Fg%2F11pdl_k_04?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D
805	Wyatt House, Mathews Way, Stroud GL5 4EE	17/03/2025	GL5 4EE	500000	17/03/2025	https://www.google.com/maps/place/Mathews+Way,+Stroud/@51.7504675,-2.2330481,85a,75y,64.11h,108.66t/data=!3m7!1e1!3m5!1scKUwsvcqWuoCrtfK1bP6tw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-18.662893434987964%26panoid%3DcKUwsvcqWuoCrtfK1bP6tw%26yaw%3D64.11184165361192!7i16384!8i8192!4m6!3m5!1s0x48710956f1c87e5d:0xf5822bb8061626df!8m2!3d51.7504572!4d-2.2342851!16s%2Fg%2F1vxz91gl?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D
991	1 Lowerfield, Ampney St Mary, Cirencester GL7 5EB	22/01/2021	GL7 5EB	540000	22/01/2021	https://www.google.com/maps/place/1+Lowerfield,+Ampney+St+Mary,+Cirencester+GL7+5EB/@51.7325077,-1.8823188,123a,75y,147.89h,97.35t/data=!3m7!1e1!3m5!1sRVmnZTrQegoEA5R82f09Hw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-7.3484508352530185%26panoid%3DRVmnZTrQegoEA5R82f09Hw%26yaw%3D147.8946386241013!7i16384!8i8192!4m6!3m5!1s0x48713e5fd0bbc647:0x4c09ee7911f2eb7e!8m2!3d51.7312797!4d-1.8819585!16s%2Fg%2F11csmp5_8c?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D
```

Claude then asked a series of questions: first to upload the images, and then whether it was for mobile, desktop, or other, and so on.

Answers below:

```
images: 991.png, 805.png, 110.png, 592.png, 1232.png
device: Desktop
first_guess: Type a number
first_score: Within 10% counts as correct
wrong: Keep going to the end, tally score
order: Random each play
details: Address, Postcode, Sale date, Street View link, Council name
ending: Share score, Play again, Recap of all 5 sales
tone: Neutral / newsy
context: Local news website
```

The final artefact is zipped at https://github.com/paulbradshaw/genAI/blob/main/prompts/customGPTskillsGems/Family%20Fortunes%20Journalism%20Game.zip
