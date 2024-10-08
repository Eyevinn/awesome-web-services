# Awesome Web Services

A list of awesome open source that has been made available as a service 
through [Open Source Cloud](https://app.osaas.io).

## What is Open Source Cloud?

We developed Open Source Cloud to reduce the barrier for users to get started
with open source by reducing the barrier for an open source creator to offer 
their software as a service.

--------------------

  ## Table of Contents

 - [Brave](#bbc-brave)
 - [Channel Engine Bridge](#eyevinn-channel-engine-bridge)
 - [Chaos Stream Proxy](#eyevinn-chaos-stream-proxy)
 - [Chromecast receiver](#eyevinn-cast-receiver)
 - [Continue Watching Service](#eyevinn-continue-watching-api)
 - [EasyVMAF](#eyevinn-easyvmaf-s3)
 - [Encore Callback Listener](#eyevinn-encore-callback-listener)
 - [Encore Packager](#eyevinn-encore-packager)
 - [Encore Transfer](#eyevinn-encore-transfer)
 - [Eyevinn Live Encoding](#eyevinn-live-encoding)
 - [FAST Channel Engine](#channel-engine)
 - [FAST Engine Schedule Service](#eyevinn-schedule-service)
 - [Fathom Lite](#usefathom-fathom)
 - [flyimg](#flyimg-flyimg)
 - [HLS Preview Generator](#eyevinn-preview-hls-service)
 - [HLS Stream Monitor](#eyevinn-hls-monitor)
 - [HLS VOD Stitcher](#eyevinn-lambda-stitch)
 - [Intercom](#eyevinn-intercom-manager)
 - [Kings and Pigs](#bwallberg-kings-and-pigs-ts)
 - [lambda](#birme-lambda)
 - [Livego](#gwuhaolin-livego)
 - [livesim2](#dash-industry-forum-livesim2)
 - [MariaDB](#linuxserver-docker-mariadb)
 - [Media Probe](#eyevinn-function-probe)
 - [Minecraft Server](#itzg-docker-minecraft-server)
 - [minio](#minio-minio)
 - [MOE Replay](#realeyes-media-moe-replay)
 - [movierecommendator](#alexbj75-movierecommendator)
 - [OSC Command](#eyevinn-osaas-client-ts)
 - [owncast](#owncast-owncast)
 - [PDF Rendering Service](#restorecommerce-pdf-rendering-srv)
 - [Really Simple Message Queue](#smrchy-rest-rsmq)
 - [restreamer](#datarhei-restreamer)
 - [Retransfer](#eyevinn-docker-retransfer)
 - [Scene Detect Media Function](#eyevinn-function-scenes)
 - [Shaka Packager](#eyevinn-shaka-packager-s3)
 - [Simple Image Resizer](#eyevinn-rust-image-processor)
 - [Simple Realtime Server](#ossrs-srs)
 - [SmoothMQ](#poundifdef-smoothmq)
 - [SRT WHEP Bridge](#eyevinn-srt-whep)
 - [Subtitle Generator](#eyevinn-auto-subtitles)
 - [SVT Encore](#encore)
 - [Swagger Editor](#swagger-api-swagger-editor)
 - [Symphony Media Bridge WHEP Gateway](#eyevinn-wrtc-egress)
 - [Symphony Media Bridge WHIP Gateway](#eyevinn-smb-whip-bridge)
 - [Test Adserver](#eyevinn-test-adserver)
 - [Trim Media](#eyevinn-function-trim)
 - [valkey](#valkey-io-valkey)

## Open Source as a Service

### Brave [[SRC](https://github.com/bbc/brave) | [DOCS](https://github.com/bbc/brave/blob/master/docs/faq.md)]

Brave is a Basic real-time (remote) audio/video editor. It allows LIVE video (and/or audio) to be received, manipulated, and sent elsewhere. Forwarding RTMP from one place to another, mixing two or more inputs or add basic graphics are some example of usage.
### Channel Engine Bridge [[SRC](https://github.com/Eyevinn/channel-engine-bridge) | [DOCS](https://docs.osaas.io/osaas.wiki/Service%3A-Channel-Engine-Bridge.html)]

Channel Engine Bridge enables seamless pushing of FAST channels from FAST Channel Engine to distribution platforms such as AWS MediaPackage and simplifies the process of pushing channels to a wide range of distribution networks.
### Chaos Stream Proxy [[SRC](https://github.com/Eyevinn/chaos-stream-proxy) | [DOCS](https://eyevinntechnology.medium.com/delivering-flawless-streams-regardless-of-the-challenges-in-network-conditions-e466bad5b83f)]

Chaos Stream Proxy is an open-source tool designed to simulate network impairments in video streaming environments. It acts as a proxy between the client and the streaming server, allowing developers and QA engineers to introduce various network conditions such as latency, jitter, and packet loss to test and improve the resilience and performance of streaming applications. This tool is crucial for ensuring a smooth streaming experience under different network scenarios, making it an invaluable asset for optimizing video delivery in real-world conditions.
### Chromecast receiver [[SRC](https://github.com/Eyevinn/cast-receiver) | [DOCS](https://github.com/Eyevinn/cast-receiver)]

A basic custom chromecast receiver that can be configured using environment variables. Add your company branding to your own chromecast receiver without writing a single line of code!
### Continue Watching Service [[SRC](https://github.com/Eyevinn/continue-watching-api) | [DOCS](https://dev.to/video/how-to-quickly-setup-a-continue-watching-endpoint-for-your-video-players-ek7)]

A user of a streaming service expects that they can pick up where they left on any of their devices. To handle that you would need to develop a service with endpoints for the application to write and read from. This open source cloud component take care of that and all you need is to have a Redis database running on Redis Cloud for example.
### EasyVMAF [[SRC](https://github.com/Eyevinn/easyvmaf_s3) ]

Transform your video streaming experience with easyvmaf_s3! Run VMAF on files from an S3-bucket effortlessly with our Docker-image. Enhance quality analysis with additional options available. Developed by Eyevinn Technology, dedicated to open source contributions and innovation in video streaming. Upgrade your workflow today! Contact us at work@eyevinn.se for more information.
### Encore Callback Listener [[SRC](https://github.com/Eyevinn/encore-callback-listener) ]

Encore callback listener is a powerful HTTP server that listens for successful job callbacks, posting jobId and Url on a redis queue. Fully customizable with environment variables. Enhance your project efficiency now! Contact sales@eyevinn.se for further details.
### Encore Packager [[SRC](https://github.com/Eyevinn/encore-packager) ]

Enhance your transcoding workflow with Encore packager! Run as a service, listen for messages on redis queue, and customize packaging events. Boost productivity with this versatile tool.
### Encore Transfer [[SRC](https://github.com/Eyevinn/encore-transfer) ]

Introducing Encore Transfer - the ultimate service for seamless output transfer in a video processing pipeline. With easy installation and essential environment variables, this service is a game-changer for Open Source Cloud users. Dive into our comprehensive documentation and join our supportive community on Slack. Don't miss out on this opportunity to revolutionize your video workflow with Eyevinn Technology's innovative solution. Get in touch with us for further customization and support options!
### Eyevinn Live Encoding [[SRC](https://github.com/Eyevinn/live-encoding) ]

Transform your live streaming with Eyevinn Live Encoding: Open-source, ffmpeg-based, and ready for HLS & MPEG-DASH. Streamline now, CDN-ready.
### FAST Channel Engine [[SRC](https://github.com/Eyevinn/docker-fast) | [DOCS](https://docs.osaas.io/osaas.wiki/Service%3A-FAST-Channel-Engine.html)]

Based on VOD2Live Technology you can generate a numerous amounts of FAST channels with a fraction of energy consumption compared to live transcoded FAST channels
### FAST Engine Schedule Service [[SRC](https://github.com/Eyevinn/schedule-service) ]

A modular service to automatically populate schedules for FAST Engine channels. Uses AWS Dynamo DB as database.
### Fathom Lite [[SRC](https://github.com/usefathom/fathom) | [DOCS](https://docs.osaas.io/osaas.wiki/Service%3A-Fathom-Lite.html)]

Introducing Fathom Lite - the popular, open-source website analytics tool with millions of downloads! Long-term maintenance, bug fixes, and cookie-free tracking set it apart. Get started today!
### flyimg [[SRC](https://github.com/flyimg/flyimg) | [DOCS](https://github.com/flyimg/flyimg)]

An application that allows you to resize, crop, and compress images on the fly. 

By default, Flyimg generates the AVIF image format (when the browser supports it) which provides superior compression compared to other formats.

Additionally, Flyimg also generates the WebP format, along with the impressive MozJPEG compression algorithm to optimize images, other formats are supported also such as PNG and GIF.
### HLS Preview Generator [[SRC](https://github.com/Eyevinn/preview-hls-service) | [DOCS](https://github.com/Eyevinn/preview-hls-service)]

A service to generate a preview video (mp4) or an image (png) from an HLS stream
### HLS Stream Monitor [[SRC](https://github.com/Eyevinn/hls-monitor) | [DOCS](https://github.com/Eyevinn/hls-monitor)]

Service to monitor one or more HLS-streams for manifest errors and inconsistencies.
### HLS VOD Stitcher [[SRC](https://github.com/Eyevinn/lambda-stitch) | [DOCS](https://docs.osaas.io/osaas.wiki/Service%3A-HLS-VOD-Stitcher.html)]

A proxy to insert ads in an HLS VOD either using manifest manipulation or HLS interstitials
### Intercom [[SRC](https://github.com/Eyevinn/intercom-manager) | [DOCS](https://docs.osaas.io/osaas.wiki/User-Guide%3A-Cloud-Intercom.html)]

Open Source Intercom Solution providing production-grade audio quality and real-time latency. Powered by Symphony Media Bridge open source media server.

Join our Slack community for support and customization. Contact sales@eyevinn.se for further development and support. Visit Eyevinn Technology for innovative video solutions.
### Kings and Pigs [[SRC](https://github.com/bwallberg/kings-and-pigs-ts) ]

Dive into Kings and Pigs, a vibrant 2D TypeScript game! Explore custom ECS architecture & physics with Planck.js. Perfect for TypeScript learners & game enthusiasts. Play now!
### lambda [[SRC](https://github.com/birme/lambda) | [DOCS](https://docs.osaas.io/osaas.wiki/Service%3A-Birme-Lambda.html)]

Effortlessly deploy JavaScript/TypeScript code as HTTP-based lambda functions with our simple solution. Just zip, upload, and watch your code run on any HTTP request. Get started quickly with minimal setup!
### Livego [[SRC](https://github.com/gwuhaolin/livego) ]

Experience the power of simplicity and efficiency with our live broadcast server! Easy to install and use, built in pure Golang for high performance. Supports RTMP, AMF, HLS, HTTP-FLV protocols, FLV, TS containers, H264, AAC, MP3 encoding formats. Stream and playback seamlessly with just a few simple steps. Get your hands on this amazing product now!
### livesim2 [[SRC](https://github.com/Dash-Industry-Forum/livesim2) ]

Elevate your streaming with livesim2, the next-gen DASH Live Source Simulator, offering infinite live streams, flexible content handling, and on-the-fly subtitles in multiple languages. Perfect for testing and demo purposes.
### MariaDB [[SRC](https://github.com/linuxserver/docker-mariadb) | [DOCS](https://docs.osaas.io/osaas.wiki/Service%3A-MariaDB.html)]

Unlock the full potential of your database management with LinuxServer.io's MariaDB Docker container. Featuring seamless updates, security enhancements, and multi-platform support, it's the ideal solution for efficient and reliable data storage. Minimize downtime and bandwidth usage, and maximize your productivity. Transform your database experience now!
### Media Probe [[SRC](https://github.com/Eyevinn/function-probe) | [DOCS](https://github.com/Eyevinn/function-probe)]

A serverless media function to obtain media information for a media file or media stream.
### Minecraft Server [[SRC](https://github.com/itzg/docker-minecraft-server) ]

Experience seamless Minecraft server management with our Docker solution! Easily deploy, customize, and scale your servers with robust support for different versions, mods, and plugins. Perfect for dedicated gamers and server admins alike!
### minio [[SRC](https://github.com/minio/minio) | [DOCS](https://docs.osaas.io/osaas.wiki/Service%3A-MinIO.html)]

MinIO is the High Performance Object Storage solution you've been searching for! API compatible with Amazon S3, it's perfect for machine learning, analytics, and app data workloads. Easy container installation with stable podman run commands. Mac, Linux, Windows support available for simple standalone server setup. Explore further with MinIO SDKs and contribute to the MinIO Project. Get your MinIO now and revolutionize your storage game!
### MOE Replay [[SRC](https://github.com/realeyes-media/moe-replay) ]

Transform live video streams instantly with MOE REPlay. Perfect for creating live HLS manifests on the fly. Enhance your streaming service now!
### movierecommendator [[SRC](https://github.com/alexbj75/movierecommendator) ]

Discover new films effortlessly! Enter a movie name and get two personalized recommendations powered by OpenAI. Transform your movie nights with Movie Recommender’s smart suggestions. Try it now!
### OSC Command [[SRC](https://github.com/Eyevinn/osaas-client-ts) ]

Unlock the full potential by orchestrating other Open Source Cloud services and jobs with the OSC CLI as an OSC job.
### owncast [[SRC](https://github.com/owncast/owncast) | [DOCS](https://owncast.online/quickstart/configure/)]

Revolutionize your live streaming experience with Owncast! Take control over your content, interface, and audience with this self-hosted, open-source platform. Explore the possibilities today.
### PDF Rendering Service [[SRC](https://github.com/restorecommerce/pdf-rendering-srv) | [DOCS](https://docs.restorecommerce.io/pdf-rendering-srv/index.html)]

Elevate your documentation with our PDF Rendering Service. Turn any URL into a PDF effortlessly. Ideal for business reports and archives. Join the future of document management today.
### Really Simple Message Queue [[SRC](https://github.com/smrchy/rest-rsmq) ]

**Boost Your Productivity with REST rsmq**

Easily integrate with rsmq for efficient message queuing. No security worries, just seamless communication across platforms like php, .net, and more. Maximize performance now!
### restreamer [[SRC](https://github.com/datarhei/restreamer) ]

Introducing Restreamer: A free, self-hosting solution for seamless live streaming to multiple platforms like YouTube, Twitch, and more. Easy setup, diverse features, hardware support, and GDPR compliance make it a must-have.
### Retransfer [[SRC](https://github.com/Eyevinn/docker-retransfer) ]

Eyevinn Technology presents retransfer, a Docker container for seamless file transfer from web servers to S3 buckets. Effortlessly copy files with ease. Contact sales@eyevinn.se for further details. Visit our website for more innovative projects and tools!
### Scene Detect Media Function [[SRC](https://github.com/Eyevinn/function-scenes) | [DOCS](https://github.com/Eyevinn/function-scenes)]

A serverless media function to detect scene changes and extract keyframes in a video file or a stream.
### Shaka Packager [[SRC](https://github.com/Eyevinn/shaka-packager-s3) ]

Shaka-packager-S3 Docker container creates streaming bundle from an ABR bundle on S3 & uploads to another bucket. Join our Slack community for support. Contact sales@eyevinn.se for customization & integration. Eyevinn Technology specializes in video & streaming innovation. Explore more at www.eyevinntechnology.se!
### Simple Image Resizer [[SRC](https://github.com/Eyevinn/rust-image-processor) | [DOCS](https://github.com/Eyevinn/rust-image-processor)]

An efficient and easy to use image resizer offering an endpoint for scaling image on the fly.
### Simple Realtime Server [[SRC](https://github.com/ossrs/srs) ]

Experience high-efficiency video streaming with SRS/6.0. Stream seamlessly with essential features included. 
Transform your streaming experience now! Explore RTMP, HLS, HTTP-FLV, SRT, MPEG-DASH protocols, and more.
Get started easily!
### SmoothMQ [[SRC](https://github.com/poundifdef/SmoothMQ) | [DOCS](https://docs.osaas.io/osaas.wiki/Service%3A-SmoothMQ.html)]

Introducing SmoothMQ, the ultimate drop-in replacement for SQS! Enhance your developer experience with a functional UI, observability, tracing, scheduling, and rate-limiting. Run your own private SQS on any cloud effortlessly.
### SRT WHEP Bridge [[SRC](https://github.com/Eyevinn/srt-whep) ]

SRT to WHEP application ingests MPEG-TS over SRT stream and outputs to WebRTC using WHEP signaling protocol, supporting MacOS and Ubuntu. No video transcoding, SDP offer/answer exchange focus, and compliance with popular production software. Get yours now!
### Subtitle Generator [[SRC](https://github.com/Eyevinn/auto-subtitles) | [DOCS](https://github.com/Eyevinn/auto-subtitles#endpoints)]

Automatically generate subtitles from an input audio or video file using Open AI Whisper.
### SVT Encore [[SRC](https://github.com/svt/encore) | [DOCS](https://docs.osaas.io/osaas.wiki/Solution%3A-VOD-Transcoding.html)]

SVT Encore is an open-source video transcoding system for efficient cloud-based video processing. It offers scalable, automated transcoding to optimize video workflows for various platforms, supporting multiple formats and codecs. With a focus on cost-effectiveness and flexibility, Encore is ideal for broadcasters and content creators needing dynamic scaling and reliable performance in their video production and distribution processes.
### Swagger Editor [[SRC](https://github.com/swagger-api/swagger-editor) ]

Next generation Swagger Editor is here! Edit OpenAPI definitions in JSON or YAML format in your browser and preview documentation in real time. Generate valid OpenAPI definitions for full Swagger tooling support. Upgrade to SwaggerEditor@5 for OpenAPI 3.1.0 support and enjoy a brand-new version built from the ground up. Get your Swagger Editor now!
### Symphony Media Bridge WHEP Gateway [[SRC](https://github.com/Eyevinn/wrtc-egress) ]

"Streamline your video services with Eyevinn's WebRTC Egress Endpoint Library. Perfect for standardized streaming with WHEP protocol. Enhance your Symphony Media Bridge connections now!"
### Symphony Media Bridge WHIP Gateway [[SRC](https://github.com/Eyevinn/smb-whip-bridge) | [DOCS](https://docs.osaas.io/osaas.wiki/Service%3A-Symphony-Media-Bridge-WHIP-Gateway.html)]

Elevate your video streaming with SMB WHIP Bridge! Seamlessly integrate WHIP clients with Symphony Media Bridge SFU for superior media streams.
### Test Adserver [[SRC](https://github.com/Eyevinn/test-adserver) | [DOCS](https://github.com/Eyevinn/test-adserver)]

Eyevinn Test Adserver is the ultimate solution for testing CSAI/SSAI stitching and tracking implementation. Open source, easy to use, and flexible for various use cases. Get it now and experience seamless testing! 
### Trim Media [[SRC](https://github.com/Eyevinn/function-trim) ]

A serverless media function to trim single media file or an ABR bundle of media files and upload the output to an S3 bucket.
### valkey [[SRC](https://github.com/valkey-io/valkey) ]

Introducing Valkey: a Redis-compatible high-performance key-value store with wide range support. Build on various systems, extensible plugin system, and TLS support available.

NB! Data persistence not guaranteed

# Join the Conversation

There are a couple of ways for you to provide feedback or ask the community for help.

 - Slack: Join the channel #opensourcecloud in the [Streaming Tech Sweden slack](http://slack.streamingtech.se).
 - Forum: [GitHub Discussions](https://github.com/Eyevinn/osaas/discussions)

