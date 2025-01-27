import React from 'react';
import { Link } from 'react-router-dom';
import { FaFish, FaLeaf, FaUsers, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Home = () => {
  const features = [
    {
      icon: <FaFish className="h-6 w-6" />,
      title: 'Fresh Fish Supply',
      description: 'Get access to the freshest fish directly from our farms'
    },
    {
      icon: <FaLeaf className="h-6 w-6" />,
      title: 'Sustainable Practices',
      description: 'We follow eco-friendly and sustainable fishing practices'
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      title: 'Expert Guidance',
      description: 'Get advice from our experienced fishery professionals'
    },
    {
      icon: <FaChartLine className="h-6 w-6" />,
      title: 'Market Insights',
      description: 'Stay updated with the latest fishery market trends'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                >
                  <span className="block">Welcome to</span>
                  <span className="block text-green-200">saylani dastarkhan</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-3 text-base text-green-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  Discover our premium fishery services and products. We provide sustainable fishing solutions and fresh seafood delivery.
                </motion.p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link
                      to="/user/services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10"
                    >
                      View Services
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-3 sm:mt-0 sm:ml-3"
                  >
                    <Link
                      to="/user/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-800 hover:bg-green-900 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="data:image/webp;base64,UklGRjw6AABXRUJQVlA4IDA6AAAw+gCdASo4ATgBPtVYokwoJSMlLrqcSQAaiWVqo8iuANkFDncXBhledofG9+tg20PLfh4gfnvXf+g+97tI3q7Uv7F/Ic9faH+2eIi9XtF8DvCz+G9A/oP4K1A/ykf/Ly8fv3/n9hf9v+uh6LRXIYwYau4KTKGrMlsoWuMe20v9S6P0yx8yGTh/PDDdISZZ37uYNU9sZzQ9kM11Q6GV7cr2A5xGWD+J0S334UyTe2jKncPeagGB7Txk+C45mle+R1CpmUlPilMErTo+LBDPqbmvhENpsnjf+l+iG5ad868bsFnD6R4/e8SPssD7an/Vj7DY5ew95TQFK1ZhezFmw/LCLGHbsEkFQIzhKltMO51gj983wAPID+X6Gvd8SL8st9O1AiOPt+Xt+N/vJ9T4RNdQS8ui4ZckOCCs7NOQJxrFSijX8+agIjEmp9U4hHOIodnLWHdwNQlGy+/HD8/hjo9JToIZrdwuz/Hz+sequjg10nYGV7tTv24poLrjBQqoQKwZywvqa9bp/zUITpa9EBMCC6N/6V8oLlZyWhB+P4xumTznLPrutU19i5HWEhxEln+qbKZOlmRak7lBBkryM6X9med3WlfBRxFc/D2ugtpGfwWRdw0v1dAMdWT9VpXbQyaC/loetu/XXz+YD8BAj08kxRiZqiqsjUFp6Z0DnCE6Frg6mTjIACgdsNQphwgZmUr1laymeSe1RdV51VIXBQfYDQWWs6dwUBWeYBLMHZil2juQLO7QAgUsiHxr6Tn+MhxTcKxr6PEfJ25wnsSHuoGW2z/Bigvv5+DRK05DTBcKZfreEyxVNzbs7sejGIW+aHtPDuELbFPn2COxSOD2cf9jW/Z8+4EDu/0zJHRZPb856x673969430BrpNK/w0j/JozlyUB/HoijafAk9KbFzFprPZFDbdxLySgYIfQClpqAgwWgxbjGkDPEW5smgi54fpPN8l5griz0Oz7wsWJ0+WSTzUBiy6tn7d/YjUcdfdk9qtX0brt4t6JN6jVLCYPU6ry2GDc8GL7SQXlNAWa/mANI+v0oDNz/tFHc6qgL1fknF70pRnHHSy3NjDNq8tT1ayqF7yy5LXxpkakIUTIHrFum6eE9Lvp6NjRq/Vvj3L3Xclav+zhnmTp3UhsP3RnFW2zjrbH852ZVH0FeAXTt6CVDF/JH2eg5G3dZkoOR6cDyEV26KJ7Awv9bMuPyf00DpG5Xk7tXwxmXfqF/lWZJIaVtpFbcRo8QtGVRvNCS2cQ7s3tPf04VR2QD/5tI6mC3n3BRggAGT5S2SlHn6RtO6zEWLXAKievzBu9LzILL5/tF9qly1Zp/2qw7e25RLfE7r/gHWK2cR4hGMlnvRnGEHD+FOBsYsvlebfNJD7D1UEK/+GFIO+7OJbSZTPCL3MsML+fVRl1++AReu8tyeAUuWJ7JhjANLjguIRUKo3aK89wSj+K4i1rtEEsXDsyZ/Q/Oi9w9DnzAGZOBFTmuViUO/gp703rg3ZKonKeNrBjm9Sww2Qvsk+aFi9h+uaBlYTpOgZSXpIv1GycNoH5uLf+0N1a6VHVitGDdPtsxDCnV35bpk7g5VByosOPCOEpjIEuBxD8BIDGEaiyN5IHca2P7VEyxV1MkAbU3GUzIQqYquRIZG+2Wa9eACLT4owuv3xxii6wRYb/6aiuahTD0zP/rzE50GXiRpFrfCM9B//V6QDN09IvbIaYA8VshVrHawT2y/UsDUlwPLZ48pdLksCjECPMRz8Hfylrx+XquMMDVbSnUru/4sI8DW2Jy641Be6qkASZ2vYot9jlTc86bvww6Qqueu1ZtN5mceRi8ykVdimAs59NyuzcImtVGnt9c6rEt2Shc+1XZQmuLdE9/bY+d9+WWV/REzGDGhbgc4Z7ZJboLdsuMxirNebvTVltU6/i91RLEdbRFv/QOwudjNSeY+V7YW4Vxl7HdkQm8Mq8k0AF7ZD967t3ePuQuCPG8oQcjjLggzOrjxOfTqceBSPtqt1LwHAoDBsMGFYc+5hhRtxugcLl06TVlOd3CILtAusuYHFLtsE8B8HnK5ZutcSz/KV7L6Jg4G9AuadgM2dQ6elJz1RSGY1KI3AaW9mgD+q2h9MOlSpCfEGd7F+2N091YVhDoxjm/hTWI2RADAO5VE1RaceqlfgPYIjnVOVY/iyoSzntB5yzdCUkgBsnGkmarOFpk/eoaWMUuLNLmXik2yGpmebUBnoSAcs4G+vUVTBlkxnF2AsP94JmtVHiScyz/kcU0ToMaLUDeQFXVDpPaV+M/2UjgDdfd1MrHKKfoVsZzrBtsn9RQfev/NIq0SxRyUaGuzKol3+gm+ljUMFsPPEKAOFBYfZie038IjDQMNq8vLxpJrZcy8MrptXTep7A23aHHJc32qJAZR0oeG5gVfNVK8aRn/v0eItcQwNix1jrjFOS3fwh24Vcd+0quEGNhYHz+DDXfW8Iw0sA2vkwMs4QAJmjPaLCm9T/u5raUiyB4QDElLxqUiV0cmULbfvJX81jVHVJgiJxtq0oaQ/tTodDaM75kDX/hF3ElYzXaQzjFvlHXf1RmvL8XCNFv6KXmnz9vbFnvM1K41HGd04E22MjH+qSYEYi9Hbpch93buFBBHXQwUa0XMf8Sz+z90Jyjc4ApVM+Az322ZFYGp0CCy4UK3NM9GmtaSS7vrAA/kG0s2yY5gJSxphm1JWDTSJlz2uI9EMgRajroZhp171lpEYqXpDO9zw8WNNT7WT1pYTCC+wUSmkk6eJlM8ZzBUkYFkpdwIlZ/frmWUYzrIz41UC9xYyhTJ35P5DCMQQRytY7KR5yLKtm40bvl7Z+/W12KJQadeOUTQUuyeJE/qDoRMw+5qPEvPWH9cvv2rNioSzLZBLkW2y9JyXveYUuDLje9Fe1ClySJq4Dr2DhdTMtDJinYHhl5D1G1iz5ZIXhiak/31qJFhKaF7YIRP4TXoSDEncOGLOxwv0JeVeorD/kIUsOrIFW7SYlUSieeZXxCnOqy/lCreT94qvNYZxfIpEYbfMGywxqujZAi+xIic0nCR9w5AlsDn8b363W+Roe0vsjfIUDtChfomb6WppKOdLf+hjJ1yIUqU+fgQO9zA5zWAHugiWdmYalJ3e9gSzYCwsHByWyDfqAIDhseMMecH7RUR4tERcUZ2Am1ruZ5vGNM5ZJhB4rE8ECdB0CmKdY6+NRLvr5JpUYmHHZo/iC1huAgHpDilBBvW5sdqUjbSp1ihSuoEzLWK7Wnp+sG7a2jclbnz+ViOmM+KFpJvSZuYEnEXqZYOHbD8azUnwkQLvv/esRfjBEHyXl5iTQvf2zWkJ/CHbjBa4d6AlsTBo2h7do4oFBMbLEktey8hWEtU0eK61utSSsfRPlfwwr4+KO8LHUwMXSCMg5NC1J38QBw5zSCLGzp2I9lLS5l6hVtsayjTGmakhLxNEts0NYFoTW/eqJdjTyGSyE4O//sK8IKmyHWSnhSlaUPA9ggUEInbQLbElyHtRm+LTwENBHRcrFTtsnt5uxd+rlyZ+38TULrVSsFq+/AVZvYp3RKa9kA5nVw7KeUldt21gRjt57dolnPIfxfZA01kSj/IKsHt8/gRkCYd2ef1BmIiQdx3Ndi8sW1FtebL7yzKO/XYXENbQI8AH0bQ2+7HlCVAvhle5bMgJOZYr8ZiB4L3fmaiRQ6/muwm2D50beR4ZwhKxuFbomSimB0H4D52GbEH3ssnV2ZzKf+T006JoN0mV8FP2oilt5yOX4U52u7eA4KTsK36fz5DwK1AEWuZcuHDzFPPz+OMWAehqp6uGGfm1VfX3Y9+mSUNQbaW6j6V1X4WXADlmNpEBR4nsbJ6xQy1olDq3sOAX0hnlLVKpkhRGwSSe6LRkgNp+56LY0ZTHJNd9gQaNglc9AytgCFNVrGbqH63R2Uu80xFRNVQplqA9F9DXegDBqAymFzLLloyv609VJ/VMDX5NdU8kK/8fA9nf/erdYq1Da3RkzWux2tLa+YWshjZRsdrCZa3jihfxw8NX28jxbWbrQ1sdCYizK9o54XbBHITsl08cBg0FWwAmazNszc0WeryenaikwSE7Or0VQ2vGPR9QUED4SzCIFPvgJJmLE3ZA9KQXsJlLV7idqgEVNv5tY+Zi02obuA9nNZcVMo4OQetBdElyscs28JJUeWUvZrwAuZ5Y+TRapv/qt5JvR5VU16m62eCtl1qvR5vVCrgQmuhfGgUN24FMxjByrd80AIdJGXJDy5Z5itr00XUVIj2DjH0HCs6HI9qU1MAvC6ySnf1befe9+IOXBxZ3gRU+Q05L9f/5BuoyrkUQvpMdgOeJEwEtD+EwJSfZmw9p6G37TQmXmodQ5BBnBzk5njNFvkkSydQVfYe6bDUYQCF4xmiNFykg6QoHwwjBWbKwuTXMUxYVuGo77KEd/1Yjm21wNBR827PV2jPr/kL9Grvpk9yEkg63X6H935c8FtXBRil1aKE/w1wrq5KOD5RaxlJ6674ZA0uaAW0256+T4Ag7Ek7pkgGUL333fXa5Aoa5791lKZl3r8ZtVXgUk9US9Aql9lCUqBdV3fFlwTJIcHREq0QoUqec3KiC60PvlGb/TTZ5cS4sirWz2ZvUkbPwVmF8TR0RRy0QR1VyzWEaQQOu5Rf9+wZHqPzw5ftCDfq1XXCvSwl0kTSQNK1mEdRJwFXOK08QUOvLXbDFXZz09IX2nGmRPL4kFUT+ow3t6LIAQVCaadWu24Gs/eYo2PMgM1Pkgv23PC6JGR8o6mAzyYIjDRV6CqJfPyac10Ra/IYpIX3LFhWapT4SJx9zQnHKk7zEyfx7wntuFGuzfvrb8gp7tkJakCNBvb7CIzqQWZ7q8kIsJi+LLHPA8yr8fk1WOrmmtggEIvZyZm66E8ND4AU5hqXET91UZKLFRHvQS/tRVOiyTmPspgEWwNU3+RyMjTV5yp5nbRBbtvo+pQHoeyRYMY7a/5UtAxSMKPahzoQeaQEmLVvwnpq/ln0B8cf7+jxkwdJfUAKusLns3m1kJ0SKkQ6GKmKnHCPN1IEnwmTVwP0NBiXuBO+VUVq1RsxZdilvsi5herJFRSFtnGaV3SI3vJUB5Zhm8C3EEWj40nYBWYGkNZI04C/q4e4tu+9zezTdjR8KDQ3ZbE5E0BFm6eF0N8xgvIu5iKCzwgwdhJIZ0EYdS7JbHMJFS2rMygr/4MEmsw+hIJI5IVHd1Zy7MKtG9t2GTZu+tHnEE97XrrvjaSHRpdyKsjBGjiJ24dORUxcWM9aeNzKbLKi0QEL0jvV2tABruvCIMSppW9dT2F0AwwAYG7Xn4loFCzJ9J/jSqVXQnJC0/+hW1Ka9Mas9Qo0JAWDrDNyxMw9byD9LaCIQLRH1ddRDlXW/Lgq3E/ckM9p5HwmGivkwTuOGRMLN+J5+BAqxV8ElJ8884imSLBB2o3otw5e/dsOb2LqdVmmmCRWU4hhNo3M39Yqui7VUThvHelTdufcr+fC8+6exhmlfqPIThZTcjLeugYDtDix/zSf3n8GEm2D6KM4AbHBaDG3WNgpJfBFZTRfc8kQrNfhWnnzTaWCgiSnkxrsyuke2qFkM+jqWB0cRwAKIo6kOdfhUmUDBvsV0vgMqNNNZxuG/PgVhtrK6juaeBtjDElgcjSJYHCQIxjrLJkpRlzRqZXAYE0HgwF2O1YkV0pgpvdtApSZfAuU8WZPznGm4TPtQPSBFn5H8CKly3UqDX3Bm/ELh6Dka1+YX28lDXfliRrV7Gcnm16S6pZIMeuwhiOzaH9iVLpDXl1y1lMAKIf/AhRorLAd/H0HfdUaEsSuwvORVnTuEhVPAMwEwaIy3r0yZUb+v6rUkTm8gTLn+AnkOl1RtmoTv8+/OAIB07gcI4MyTze31kHxWIeznePpeMptflK+HyGhh30L/iMbhZEqQyKpb+SfHqaKdmyHiU5NG9h93BIeZF2ffxCVt6jwCSMUO6Az/rtZalK749frTHWXl3m0ONdFozsK8Ms0tnHuITWGs0JDmdEWs9Q4WqJNDCGls8ZWa/9aHU+hRoQ+lGZLymR/zzZ6ino7DPRs4c+R1uaZn+r9LL7WUVEqacwhaXKJhAzrdJ0m4ZGnElCkX9Gjcdphoo8n8WnJ5zjqtC/28KM3M5Jm/6sBIIDkij48RR0wXnDrHANuOxuAsgHjrqRN5ZEinxk9o0iFQz+fOk1oL4mUnccNgViqXTnoLOeM7kuTv35KCfhVUk9K3ghFflnrxzzxcw03dtWQTSET9QKeYHiz+ZsQR7HTel0MyFBVzbN4Hok5FiQcg6kUbKHiuA5Gm4gGcGNSzGb1+sCF0rgIwEFbxaD+lgMLWDfDMEG88J0bFizeeVS4nj8Pbe2hCi2hSRZIbmUK6BfQnKUYmSXTq4Fn70ujU5KqH5mT5CNiVO9ipL/+p1aQKSJexoGuI9QYCA9SZAD+XlvQV8zqQzMoXj38GOo5tTFPH01yvauhXrww6pVdNddD2I/JV8zlPPvAbLuVDVqNWopgfAmMGQcPHrVq1AjnRFvRSdnVk3nXie1Fp7sUyX9120NFKadYHic8iRj4rw/Wdk1y3uzKA6nWcGr9b4ySj/fAKLVt90LGovMGXOI59b6NV8DeSZGGaPQeZhOhREH1+WMWS839Nw5adB3a1VCG3e0uLJR8M0SF8NptITBIrTZswRzb4rksIPPd3kS4wN+mjm6tjvjRliIcR1o4jqARxEcOi1VF3zcGXuvfNpKKB1c8W/YRCerixT84Hpbl2VUVf1lLJhhoOUfuCdGQN5s73CCZzk32+OZKRhk2d1QNhdi0kuP2qNX++1+zbTtZYe6wZvedNCIrexdKY3mmRKueuQ2M41r0P8CrEiLQUc6ZUrjidgm8+iRiYjTQ0bM+Hq5UOmtn0KNiPh+FhR+UXQ1oujwg972ddJi0zyX1Rz5akWHUw8psQQOZTa7FDmasmyuk0atNyBneJZt3vl43aSvAnrbM5UcHbNNIca7F1wgxHB6zU59LZi8XOoRWnqeIFXczYz+/vFJ08ivsOwY+3b7xJE6EiGG/u7/DTTF1FwwEelcYXCF0AzPs5nefzdOq9ecM8Z27iGyP+oYsjd4+ff+3dRlOL31t8ew0wpJXbXzDp1s0D5iM8rRnKGBwnkrrTbGX88Pg5MDewjCrDi0p1kEQSkHNWki0v3l51SXmZp84Xafugv+cIf1ObBseXpKbW6iPt7WNJios6EpYNVj9Xd/1Wk9Jc0/Sf4GpqOmq8uDS2oZup/e+/uucH/I5B80FA14RKafzmn/LmhzCgk4EvdTTU0Y4Bs+Zdz1RxgtK4NZRbTmPlT0mZiZG+i0G5yLuJ/5ZelWC0d3RbTANjZmr56yhz8VRkmPfgQmk7UM0B1PgQtlqsSZXc7nBO3BZ0Olk0YgQ8toqJ1VBI2GW7jVBlt1T5Yo179xPU294O8gqm8v/pZotwzSM8XWgQTCm8rGJplezjNtPseASaUBYyImIDNQqkKV543a5A4dykEIL8EHt/aQL6z7zNALnqZrq+jSqvSXuQC/9qw8kCGcbTkoJiNlZnkk23rllHuEIqMxtLsvPGJZNdNTo3Qzj/QHkKNCHJsPB7vV04dL1swexaz5w4Mm67we9OsICYAwhZvzv0yB5fQ1/fNyhVnFHhxsmjJ94XumQXnhIzd5mkFrRqBCYPNe6oL6PP2/D6nZUY6AubSf+4RfG47NwSoRHNm79xq5fiuNfahHdlcNhhAD2HMeSUMe+3teOl/gFKSLDypLA/cXjuUeZK+SklJirCq+jDCUU3r8C1iX0rDF/ShZbopGX5NigNZTBeMaPOMlfTIqLT+HRfJepCTZWBZTlVYQ5UCxFv+EF5/sX0z7dNAQHMkixlpFsrvHdL4hynM8l1shc6DpVslkbrZOjqIEMhQXQWcD3hqxIa7tUbNgyFsGsLxfliynwekbxDk5F4Bp98wn6RPvkaUDQH4/ICPIy4B5CGbGCnidjQXgnRiuB7B+wMcYQGmm6Ix58FHB7CCMulO24fEfwCFiG3s/gTi5lOp4ESVeUD4qIvWcV3IBTWIe3PyDQLtRwbR14wNqAvDjk5/DK3GoRNRmbS/ciVKfJdO5YDRBljhuzN8m3uG52Jb2KM2U6LWo2ehMpoSAQwKEgcuLdZYKxIvJJmOsBMBp0Dpo4qWcjV979IMCTFaCwz5u59z73affGqoBrocqKB8naAK5c0NC/LCDRhgJua+4FaKWrO31p6OoXLwK0JvYJiX/LA0e2aN0ETgsXbyl5ikmu98svWOc/4hO3DVcT2SPzCGNNlHTUSm31BVJN/wS+p1YVZyBhFCNJE/sh41H+91UblF5bxlxrehq/+XkwBKZOfid5gPzoX8OA+Wk/PtGWP/DTrqWw/XljwrzvOq7aTnwDhJoHr98Imh1fQOYSMsxhnEw3uv32Pl7NVjow88uSEEpMWSFlN6Ydq/kTCafIgZ+lAxGTv30/aCNzblp0i1PpP+3qMr090kbMTgQCNUEs8j7DQylZKEqFLVbVBz4GzdI/gIwlBIJiJNl9v9P3u5pN7LEIcqqZw7rFVNk4weEmybOJXC+i6HXV6EDyhAABGR3WSH7QiaIzIBL+8w5VnK/UznLN3cGrRR+P+YPUte2xnw1vP9Q8Z7kjVXiCM4UGMUYLga7/iUaZwHaEGAeuChpgbQTO7f3v23sHMlbiRE7kgA8biq4n0doB96ZrejY7mu902DjS15C760xRYNzJ3ebmCzwIVk98j++wb2ooW5KsLBg28BNUAqMsB5+qVvnUm7EY6CZDYBRKod5t95cMEXg1SPLdw/8/mWZAt0FYggZQfZtjHAicFHhRT1vVA/k07Zoo87g/PLRaiEQQN+QxqFnbVIXp0g+Bg49DtzZwisbmVVkG4/Yqr4ajHahk3rmZC0zl0VmZ+RkE0tn/SyuNbQo6Em23Hp8fOZ3sIo4tjuIQ1Bxy5CHKmNUqJnGGLuXGtB1Wmz+/mzv2nu7uAy/MLFfByFWF2di0jGmwUYkvJ3vWQys1zDSCh3h8XldDqXhmpElCaw/wmkpJReK13Ark+MpxgiUT9EQdIatYH7XFa+ATaxwIaKL32Z8RTEIEj/E0gFUux7C5xIHSR/YCO+fDtZSgcZE/pcvY2yz1aef9a5VJc2V5OBayl8wSdtAt/NnaIpfX+yiL4/5bFr+0vdiHCElFUZIP2u3d/F4NvGHtRzfd3uzDHSuor7QRivS+pAdzv1cfpey6XFZVZIKr3IRLwFf7W7v/IteBWxOE2Q4+ri4Lv06XX0lAQ6/vnlNUWuyo9lw2/IIb9jqEeICZGeCkqbLT/jcTbgJ7upIPjd53fYjPJEriakQmbjMgQpGw9O7irIFo999+UyaCfkbBSx/c6hJP7aF955nF/LFDI+tw7RXoMiDX69cgABaCETE7CjPUGCsP4C/B7SR5iXwQGf3fi9kgCb+gVXb9RSWkn2YpeAny/jfA5jtKmr8X6R5RtoviBMeD1Ar/Zvr7BXK724ktzbavreBHfPPx+EF9vjQURhG2+RwJteZn6+2q10PVcoyrJvXMih7jUS8m3ehpEtAaKE1Wtpg/I04VUfWpxLiyfydvRngeGOeAZO84yhKhDI2Quo29GPZeBvDbcNh2lkQRe8Csa6WI/imsObBaGmpeNrGoJ3oei5/sjjxPnv777AGCnm/BmM5BHc/7IrFim3/mvHr4kHtcs9UDGmIlM0hYWlobjOaFEzDZcCvfufEg19OPWQWjxS5jMz8NQK3A7Q3LRABdGrNDvdbcNBQGXf3mr2saxKsSugR12gDk+E0QGWt4f7KwnF9cwBgMFvXgUGNbNZ3Hgc3tasF1Lw9z43+OvTS94UlaAwZXOpQeOunwaPQ79lbhkzHmnj+e6Bqdlr4Unvtwequ9fyws+DdBD3QXXd/5GBlpuUDIznfB5AK/1XmKKp4kwsjvUKKkGvsmQlvU378YUtgt41bgJSxs/KJIy4Q+kPe2ieQarRZ4yDjiCX0mlxtUBb910XGZPKzpsxME1/Y3qTxRrBaC6wICuiiVKyqqrlpDAzWP++ld16Y+2HTf/JdvC2rhC6wB5LykKGDTdXpbRJcUCrNUVxrG6dWsA945fI6BOS+4wT+w1hjifpl/18YZuupgrkobX0WGAc0xf2Iy4VYkK5mqRB1hxBInYG7p69YMXDK4e8DUHvYEH7v27zRKyjex0OVWCJ67h5EqVZy5EGmwM6aySS3Yc6AnPMfUBWaZVwF5mWqPAXQN5QFWfhnJwzKDNhYcBP8DovPM+uOfLSm7ULlKRMsId622ulv1rM9hlS9hJ8OxLilNI57GTyc0IYVGtQAoACbtpndK22B1tgaVxdGDWZC5ACEUpx3lsA5rH0erofCS/AaRsW/6mGD1uEd82VBbHZYUdBTl7caWQI2kwCCeBVgQgLB7VPlC2J1who5P04h0NXQhn5JKMCSfivTQCFf0LIJjZotWzJz8X1TSCVmgx+XaBjH/eTFKlP3ixJJBImuqc9eKLSGK9g1QgQ6L9nizeqhOAlzfHyNx2s5XNzzh/sEumYQw7TTWcJO/FnUrOHq31lFU7FZ0/lZMRNIt0r0qDXHBxfWsDoRoMJ5Qtk7GW1U2Be+OKxEy55xHZKIXrreBOwdTZAbq6/qQDLsAWzJbcI6Xg85L0yxcwXT510d6Q1ZOQ8MtARSHvkFkH/55j4DHELgyUz/UDJKBA7uAc+5QFFTL5iY9LruiLvMl+np2ZTpJhOGU5M2r2YU6k+sOYZhlDsFJ4DxsxBlk8T7wuo+pXLKIk5sJMI8BGA5yG0BEe/a9xXysTiPdzWK/LbiILFZ1B7ugfzAldg+VvFXMWJKkqaOwb9tgfy8wlf2zVOEK51Oh9e6d2GlfVlGkeec/akvs1vN2wRsz7yZFK+XQnKhgsCUETkqNO+ujC/9MIEoAm/IxfCQ5RpdpggNeGIxDGS02RVH/6RC4F2COHXDdibk88JSi8Cpf7rb6pWwqqvw351H4oRACR90ao6cy9kESowgHDOcpICdN54Zzziytw8UVmcXSwPd4HPDW7w+1JU5ayv94GFBOaTwVT+fznJRT7H5qn8V1Fcqi56NW0uFjGG4U0Q1JMDpmhzKV5t5cI2VVNZUuZ2FQ/owZn2Z49UKmFKj2phH0ynqcv2T20J0WSTSI5vQ4sIC5qq5+z2sSTNXVrcpgSbSy2gq2CIyA2HLrLCiLsXyZVmgYSMizvzSX9cwJ98D6eqihF15hZQC8AbOmP1ZC04aNkaTL2FqQ779zAinceZGjnoX8y6mhKu+N6RqDENSWmJ5ydrTbKfdmfHNnkV7uYQQGakZlhiJjAuq1sVsTBjs1isRpe8Mhjt8qmxXrABslTiu4pjnqsvmIwgGLqeQASwrwhm1JQOgB8VxMLTNnUcn07Amfa3lG0ujYoL+LGkTsVU0icPp0jktHpjBF5Afg6cBBlxjL8XOvhfHUpUh6G0vpt15gOn0zMzXUsh4OWdlPWZEMKEU2AD7DIxv27pf+hXFxn8m9uyhcpFJHdFP+1XeAAn5P/Ng4kDOzHesS8AQ56Sa94RPVt/Apm/OuWSj5he/FDuWw9FFX36mWYiaKXjAAwfR69T4yD4FnHkoIbWCOgQKvStVGIAg70SK0kFPhgF13MbxFXSGcHZzTeLwQh2LHRx6Ov7kbslBGEJBa1T1X1etggcUhGPkfUc41UOBabOiJtTA3Chqp17O+aoumlnlK8p0CPt9qeSmM0ayFrDVTxPcTnXqcds4cyRv/fDlUOq468zz5QUvULJZqbWkuifgfqnqC0EjjA2Cms6roLRdeVMgI756ehRJpYMZAZ+22TzBV4UEPhW08stt4ixls8L6ocVW9bX0nFMMFJh35/0nMHZ9OBWPogSWfvFzf6UvgBGDUPKmPNUrwPyRfA6IrATSslh81kh7f0rVQbQPWCbzfW5gKVA0WwgZI8GghRgYfBiWxmKPketbQgZhWPepXXE2HhuAyPMzeukKnvIkNgX5yo1X9ttbf3WOYL01s5d2LaC9YEC1Xh3EcUypNDT2ZZyjpmnMxkwZD3UMxeTi3XNXpSvPi2KEI5/9tmKNsLEoNESK3tTkUlQt4t/VmrCJ29uq9MOtyCq1pqyU2EAHPN7ipxKtvfdvZASn8YopeWdS6hGHim+7WqZtmSH7vb8A6/fBVTdslMkTCkXuq7f0rejLz/JYBdgy0rbSzMoBAh+4G3aNeJMZReotJH40hkuLZ4m3MaG8vYcTtN17lQiXZFsMubUw4Nmerc7Xpi44ud7nPySED9uZET6NsjfJxc+umPC1D/q+/+X+WGTHxnWGhDt1QmOhYa2glEHWRepQwBBPZMd1JZm7VgnmhslR/c3ZThtuBKtdWGI3T97I6LkdI6VjTJd06+bzSPdc/PBU4gWZi9h8Z33BuJSBgiMFG1EcSsUBVc8PF7XMQl99DY+/SRprj+T8Q3JYQPLqofqOH3encv8nVcg60+Euori00tPqTxPX6PB/rsxcKGm0xrJjHMjWMTjHn4ivWxFA9nz3AxT0EKIWFRCtpBnWAiJv4suRZz+tMgejDEZvlMPPF3ITlc2Ux0MS2L+WdyY2E7lbFtDaUjEp26TctRtgWIthzeyTOONsM9N29po1W6k5Jtm2bsKJ4n8zbUUSAma3oxF0PDPm0qivy5ttrBsYPL4PHQoAcFwfjepT9nQz87rMmvxNqKVlieSEW23KQ2uJcXdGMTPA5Nu9LP0B2G8PivRICA/WZr0NeESpwhDDHI39C+WgSlbeI6n90wUZOTYr3h+auFE0Jf+j1TP2YsiDhhouaI3fb0u+kR4TVNhdgLAdlxxWijUMZACCYgeACdMYtwBC5KJGsHT6p1tQIFBkCTcbeGo89WErbe+aygAW/OCcavMTHDusDXBJzv4fAbb6r8kQp7k7ei2SQFRORxGv4Iy05Oo5kwG/JhWO9CzCg/w2wmIzzc4YJam9RyiKad2ISEZzTpOmQ2ntuWs/EYFAbBgVfMYrNrgaW9M93WIuAl28wgwfZB5WCQjBQx+LpXViabFynsUHrXMsc3RjGaIGAVrt4nMl0/cRgGG6zyDhmhxBRQ1bBfinPX+uJGmZsgOKIlw/J8ipPTQ9jP9Ef/y6OVvRX145XrQ1Nz3BCwIfuzy2cqbgBoH/d2IINRU0PcVeMBnh2STBgRp8c29x16dVfKVUrO3l+Dq4zynJ3kTtferwNW2zFIhUjf640iojJwlkMltAxXURz3EbItQ62Pdtw9rwSYNtM2NbDEn5WIDyBila78al2bC7FL0Q+XWzO4Kys4kO0N7CMAZUV2htfqECZyCJd+e1242riqfB5YcC7Oy/r1wK4uhMr4CgVQnttJmxReNdpqmz/bdptoEQ7y9G1VXERNii2TW4OET1VwmD/6ItSLwQLbxRRbrnHYDQrkPzdfuchiYzeIl90iMMOv/R+3L9KVOx3VzNxiHGTG2xRoa+jCOjnX5wIFDn0Sf0/pdzjKem2rzKOtj0yximEb0DmzEPXoLUGq88txxTz/svhaDiYAKFwBPfTn0ht8QsUCRY1HX2TJqTGgYjFxw2arHCSsZJyI4eopdylOSEvh/WlaIz76NIteMUUUgmRYz8xaJAW3VWhho6GBR6akrct3tXRAVGis4Go39N1lN6/SFmF4iWcLnZ+QCjkn6M0pgxy5tst5ppsNZWKy4HfkSgouTvP7+3u/ALwxIHkE8By8AoIeiLhmuCoHGuHoq76u+lU3lgdhD9OQ+1XpTN01qfy+EPLN6BK9zQCwu1gnTD6lZRtlz7ZAJm81dNGPV1g0hC185ZTMmsVzLxbRpJiDzq8Pguq84KHG8a9kAya8ReBSXP+abO91tW3LXrK+VR+xRsdRizeLUrNqCk0gLuqNfs5q7mysPSEWvMjG+eiEGLFtymFgjcMieRCO2b9Pd+Mzh6YWHbxJHI7g17nO+Y9J7I5MOHtRB5jfAh88g2elhVDE1gbB2mJ/Fnr4cPQQjEzrvbqNo8HMSvbQzBVF3Ek7cW8Wjn24N5x3rZQaSOk+yjNa5fX0oMpf8JV3i98L4+Spo9yojMDk5foozMqBnoluDRpDfeKfd3hBNfJSLxUsoxXGLNlIEUferkivzHFXMy76UKs0PVNQjRr2uNfhFT4faSa9HClmKUec6m4w6Bgv8311Ak7B6Xc0x0peuDbViaqFcLq2UNBDgAdWU4E1wCBP4aifGHCPH5irU1X3AeMSK0r40Di+Nh2Q8rwB0D9KeH70pGXEdFU4GGXFSxBTRMK/CgpZtFwCj6ZbOyd9vk5glrOzVOFCgnPr3uZX7uDuOYKAAGgEGMX/YvFpYSSgk70jK8hj9SPT0IN9SuMQlkM/RUoudnrskxTt42pjOaG1Mf++9oCwoocJak1JSC+cWJdB+9QyOYOkuDthxLzslzxSc1fdayOgB+Uda9Xewp9BvnvoIcqIKefjNbyjz5lbuOJZE58ePcg/BsLDX6XYmrnEUApioMzBqFWreGQcNBUBInAI4wlojoMvnaHmXtHhbGvC/nxSKabeoc/rA0oTKS2YTDycE4eJ9GUaUMk02Bs6+f2UkeQYI5fmwMvw3R1asXgkHEqyD+snPz15XbemFwQIsbkxulqPBphEqfyH5aW9nGZKE5FSbiDEa8De7KdZk9R2S5fPAGPk+43oMnS2isZPMlDWleHZk1zT/sFHeIXU7WtFoR8zEobcLzg930nSTXyoMPHeofTRbQDARrlMAG7sjFS5q1xe4YeX+Qy0bvgypacGv8RhB5/ckFoWv29QZFvGNVbO0AiCO7JSgterU5J5NY6i6Pbrik4WxPHJsisyd/UcO6KHsHckP/8TlXn82HqAyj4JVFQ0t/nY9oupnK/b3x8P6v504jqJH59sjTHP+wBkFq2vHFQyutM4NwadtwDwutkO4HvZBBK3IsxNt8ZX1K8nIBnUKZi+SQYlf8a2qZlF0489chH0m5oWo/aJevxeawb1V9gtM/DB1mOSGRBRzezzEv09XF1TolygwETOPqcnhI4OjDXVkYay94qXqgwt2boNszFpnmPJQiM7FnVdJD5EpvBt4CsofhwrA4Rp+uqCjT1GDsko2b7waPGe/moH2/yVqQMvaemsrlehX29YNd19Qwg9PMT6kdDxE2thJPNi+kXXiB2mqS16flTneV/wGteKbO5cLDtYOasl64rOB1rInnyYRAZTsaLbQQ7xcZcvTO/cUDR42VYXc1s8FlZ3Qu9k2AgpCoC5wIlyXik+ypSIFIwY8Lf2SCl0+NVxQJjIFqYbPrDP1bRmsWZowJSW3I0OZPLDViP3wT4cvCjNbFs96A4uBasIMBc/ZA7RqEyyFZS2PZnZqBga0Ac6dslX4qNgw/p+PQuZs6R5jNNGmyFeiMzIb9essFOFVYmq+Ac2Ikl7sxcpyAwm9NKlLvR+RNGKWx74xcPmzlQlnokpybkPV6P+1h3UjtTZ/xtQceGAM4pkVlhvyyFXEIac3XaP2OhtKLOt48xvEbNjqoxHc/Os8Tpfs5tf/6hVmGhip0M1w9oskFdgKNGveoyvuSoUk9/Izv9WtywXdPgM60z55Zi3/sR0x2ZoxUmp2zYcrXqATbZ2hChlDMNHXC+e18PiL3mBNos1jANpTCW2kcdpa00qgoRWJvyuZ3yyvoAP8lyTWX24uYyxzjcs2wgDJ+zY6CkTYASPLP8ljqBmSC6IEVCv6RFSoTyTRphlPlVuin9dmbW7Q3vKts1rjMDa5wF6PFoj3JV9j+KdlUQdbGIiw44xuFpapKG8fF/L2A7LEstFQLwtqZdZB4ax5lnc9HACt4++GjnwqMv1lO3NrvOA99HY1pRK83ZZTSOnLatqdOPiPS6jedFcPPam1cuQWIuJ2lgRo5dz/IS3DxEp1/RDGc72CQ2aCuWa1xUXV7COuMvuzDJ/LAETmg97Hlc3fehQD6TI4pG3hxIuMkrLBXcGHaVAGYr0CbV1EIInGCwHARsjOcE5ha9j2dZGTTHE3MGiHZ7V4Svg+jAkKicW8K4vZji0YufBR72HU5hrLasdlGj7MyeMDkjYS0C+AYP/bn9T/iHCTKLqjIubWRPt78JvCG5WDfm+3L0InkTmBu9PKN6XCt0qinfcLPPwXNN0to0gzYE6Sx0uWBK685xsAD2swyBI8V1oc/EEj0pOCNok7OmRbfKrrJndDDN+w4AdhBVdKALkE0rXIS2awsEpALtNJQkcrEyM5v/16mkgXdcaFTwXpKciPu15F9R3VQfHbFtCyVn01aGWUKtzllGmA5kTVs5RixFslWqortbtt9bfVxRHsdHV1Dh9gYIbUKRUtNp2wFmmVzks1u4NlXySCfw1pmYHZktqUJr8tYeUrLjIkmX+ilIxRCPMarFoUU8k9navWUYwSVGoxmzz9RP8++IHkTCY+TIfzQDRDmgsg2winIxIP7aZovUsh3l8NcLcDQ1hMb2PmqN2/mAIPu+tZMRnFPfU8VH39AhwD1gh7Hzfn/Ks9UGnbQoPpWA5xHQgF+s9wpe7g45pKuvwkzqjuSZjs9/JkJWNf0yPFYh96mVO28NIFVbKnjwU1eKkDhE1nmJj7n2av8CL27QUDwWKF8VUnpfTSUGH85s5BNiREnxVXnOEJhGgMjuY9n8k8NQmdDcpYT948vfxnVpdD+02scuOW6Y4vN8gLOQb05lWrMYn+5K7ayobuIIb2R3L6PryhuBAxPhT6ZIyBfgx1NCHBV/lFVe1lXoRaH3zZA+pDuRqSlbxUAHTWpHEQnlRCL1De94lQKQ0ZZ0ZESjwRg7jwXolmwEDUpl3uAMPF52ccave3mCCuBytrcyMh/mAgX5ZNzoOyPsLcOkkNUNplCyddEe0QvaAHMTR3ucGhvw2tP+xZm3gdvzSB1B+GqmujfogVx/g4xQZJ09kXdI5auLqQee6oR6xcBxWHIyLdZBCYnvg/fNYzPmtMO9jNJoT9tzGsR5tcwy8n7gN5/pGAVbGL9LibPlFyN2N88ark7tHCEyliMFwAtWSArBufv9GX5vcknUuzxb9j6qnQE6LeM+0fAx4QlW3VHqnN48o8r1IJbfHTZ4i2IfTiyPymFxSNNqZQOQWGYbWw0zAxIMfHPuWtqXMi15J7qUH8tEIgAqjfZJ7F/H9b20MwIfJ0qWMtMd1e0BUT+kTm83co00SPTDPaJMDE000vo6x/hsievSwUBD4a4ALIyPI5eYeNq/OU3Vz0mWWd4CzPeW400GFDu55jfMKOyuMQ9ipXYGwhpvMdhyOb6dMLuvDokuni/cne3J6HKDUle2HZFvTarCkIf41j1YmAoijyQLC3uvZTef8n5u9nmjKrD2d4YBIHJfl5VcSsm2sgf4ZbDJ7nRUtwwQDOnVAFr4HSkOQMKg3Y6tF+ar/f9wygg+1gcwQiOYvZi+cJz7pYv/U7z9Pq+BK6wgY4MH/he90XDQ2sQkcjdhmhVSQ51zRl+86jwTG7czGYhnI/4O2ym6p0OXAzQLTU6NExftfGA/1a0un2JLmwFWb5zXffkBD9vUvgJJHMINIiNoY919ipJhzwUfmZlqKvp5q+53K5qaWlv0nTZeAWj6UsTKE0WTsfnAC+q6+otN/0aeUvjQbMAw5eZStBaQ+hOzN+Lc8TsBRTseHMQwqSaoM2KeXDaygeszTFhI8KRTMUqAE1ypivlwVJ9Gty0etWtpQLCZNusaQS4quadygZXAGHiIwMC2HmxblA2baRnLYE2FIq7N0gwx6waBtmWH+z5mCGFICoaVVfHLkExga9W/u1/RfgMpOGNlTsWlYPGek7UGDgzzP/70P2ZWyb6aUkaCLmBiBakSU752sSZaqrpspteu5rETPr2rqh4T37uUXqWL7GNfURxrYnLJytTfx4TcyNE6WjNljsbtD11VmK6CzX09H7gexi9hKtlD2aNs2kOu9XDNvREWT5+LnSem1oVV01q0dOZUjRB6dpS5C0MNLYpYM5ldPyoREGvwje9VwQ6Gx6YpMcsvgmDA/ns90dIkIW7s9DD7BEEsg+bi7Hp1iaD3ac6JOF9I2srOWBQfPEaUt2u1Q5mkLyUNZdIJseAyIyQqHrFG7YkHpLbQ2jFnWreMjhtKKdR1J4s6k2PYgg9+3y4HVGy1EwXTA7Kd4iCVJPM/SxFz2mfCK1LLe0oAKgw1Uxnr6/fqqBjkiu0e4BXr4sI5zW4IvMRo7oegnZk1P9DdoKJ5tT4rwwvuIwznPFPYf1/0e6JuYFSbLZqkxZ17Z9x73QOrx5kv4xvxrfX00+3AYhGaorsxRrWFfTCdVsOsVajc2Cn1Zv09kTTsFWMhjRWFivpfme2jfgZiPNB4mlHQjY99VUe7q614ER0XOHKCrSQk48GvUSuxgywECAKfiHdKWPacmCe+wKuha40OWRFafcyMOVi+a7YjJs3II2ldtetXC0niPkHobFr0jeSlpKW5zU/SSclHF1ZI7Xwdkp9vzy7uxLX1K86EjeH0KRjUCvNiXX1mQPKBuJHLY/qrUTumxI/9eixLdgxIrjXUOhyrAvHE9ywyvwQLxjqIY4uJyem4G8fMHfV82NtE10pHUqqP69RICsnrr4Yh12K6OLp4rq+QuR8njXl5WoJP7afsQPXWjdIFbEVMF8JHHgtJpPMHElpmiIpBv1CdY2X6X0XsTuouDH46pBp9p8l7OvKPR48o/p6BuN+OkEexo0TB3zz9zv8tbxJo3/vOl48EAJOMUY4kY+d80KlylHJ8+LHctnPxxfSMUHGoBgyI66gm+GEGO44gJiEXO6cU9hJeFEiGlxJ0rLL1xrH5xidsCkpNVfPZJoVfkBjesd0GQWRUqpFQpWPcA5DeGn+Ac8M0j5j5Mg9Xhjqa8xM4SfqAsrT+HDdgcP05n5Mxk53ZpLwSSEgCmFaHtZ8YnSsT9Hl5IFcoAlhy25dPe1qs+Lv+ql6Yu23W1h62WFiqsYIHLfZ6IHg2xZxWzgaPMsmsP9m9gqRYo+3PH6+cwOzsCXHyZvwNbF6LZJIPW1CZ69cOurCAK8CXVexJl6qyVtAD81Nxy94gaeHouoKveh9LrXZo9nSLslbHLaASykGGx+ZiM8MWo6NHi2RCqTqaPIz4EuASl4gpjD4kTgezU1ovzqKffqQ+UajA583bsgNZRRRuT0UF/M8HsO7oIhKCwMR0hxxjOqJ+DM7rGwFdQwvdGonSCUPUxPmjo83RsCVRoXfwLIB1/MYqSC/98+8add1Y6ebKCC2KmlQ2uSq9VbZayYZQiULdBfSozpsQDNuy67afDzqBZUksyVy7OD5wvE4cgegC6CqqJgH7J3kTvo5touZbP2ChPfNAdlz7G9uRqwAGJpUejI64l6xhdZUvaXBD4amhWQ85Ib3EubBnMHEUkFTX9DYO8yRNP3X+z5kWPuiQToGqteOgX+V7jyunfOlqlswBvnVUjIwJ8xCfMjEGRaRqOLvBPOgWcLdM2MVz6kVjUbs+FNyc9H10/DBTUvsAMS9S2mldV7gpsUy5cqVFSYsGac2bLO2byBQbs2bQY0cEC4VhTcDJD39wHwdOaNWq7GrWW44Ka1na79jrA2mW/vv+7+Xy2i6pefaCgifwXaEHHBi4C6L8cHACjdShaQYuRVK12BOsw5SBmeN0PY03i3ukRiF2oaZCEIU1nqKDIghc1aXgQ/Qg+ha7PSGiFq3bkjqPLWfZdKGDktbJuD96edLwa3qhz03pz4IH0WiIfcPFI6dg0PYxcUdaPT95uNDJPOolEvQMglrF/AjiunhRCXzBgHkJijHtzvNuL51tJbQPkwAhOKPeh2maGZS9GaBphqH3AMOAs7T/UBVJDBXJZkOOaftz31+j0fTvlh0QsDRyxLvmk0c18OkjCAhDh7kEYwkKLuJL7eyRuuXavfaPhSwB4qldw6gAAA"
            alt="Fishery"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We provide comprehensive fishery services with a focus on quality and sustainability
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div>
                    <div className="absolute h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-xl font-medium text-gray-900">{feature.title}</p>
                  </div>
                  <p className="mt-4 text-base text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-green-600">Start exploring our services today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-full shadow">
              <Link
                to="/user/services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700"
              >
                Get Started
                <FaArrowRight className="ml-3 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 