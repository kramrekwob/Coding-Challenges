--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    size integer NOT NULL,
    have_explored boolean,
    has_life boolean
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(30) NOT NULL,
    planet_id integer NOT NULL,
    orbit_distance numeric NOT NULL,
    visited boolean
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: more_moon_info; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.more_moon_info (
    more_moon_info_id integer NOT NULL,
    name character varying(30) NOT NULL,
    uselesstext character varying(30) NOT NULL
);


ALTER TABLE public.more_moon_info OWNER TO freecodecamp;

--
-- Name: more_moon_info_data_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.more_moon_info_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.more_moon_info_data_id_seq OWNER TO freecodecamp;

--
-- Name: more_moon_info_data_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.more_moon_info_data_id_seq OWNED BY public.more_moon_info.more_moon_info_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(30) NOT NULL,
    star_id integer,
    text text,
    peep boolean
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(30) NOT NULL,
    star_type character varying(30) NOT NULL,
    age integer,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: more_moon_info more_moon_info_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.more_moon_info ALTER COLUMN more_moon_info_id SET DEFAULT nextval('public.more_moon_info_data_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 1000, true, true);
INSERT INTO public.galaxy VALUES (2, 'Turts Galaxy', 2, true, true);
INSERT INTO public.galaxy VALUES (3, 'Jaffs Galaxy', 4, true, true);
INSERT INTO public.galaxy VALUES (4, 'BLT', 100, false, false);
INSERT INTO public.galaxy VALUES (5, 'Bubbas galaxy', 300000, true, false);
INSERT INTO public.galaxy VALUES (6, 'Marks', 20, true, true);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'moon', 10, 45.21, true);
INSERT INTO public.moon VALUES (2, 'Marks moon', 7, 1211.42, false);
INSERT INTO public.moon VALUES (3, 'jess moon', 7, 10000.324, true);
INSERT INTO public.moon VALUES (4, 'tiny turt moon', 1, 320.64, false);
INSERT INTO public.moon VALUES (5, 'morks', 4, 2323.1, true);
INSERT INTO public.moon VALUES (6, 'tiny jaff moon', 2, 3434, false);
INSERT INTO public.moon VALUES (7, 'big ol giraffe moon', 2, 40000.123, true);
INSERT INTO public.moon VALUES (8, 'Mars moon', 11, 450000, false);
INSERT INTO public.moon VALUES (9, 'turt moon iv', 12, 123456, true);
INSERT INTO public.moon VALUES (10, 'turt v', 2, 45678, false);
INSERT INTO public.moon VALUES (11, 'turt VI', 3, 9898, false);
INSERT INTO public.moon VALUES (12, 'turt 8', 4, 9090, false);
INSERT INTO public.moon VALUES (13, 'jaff 2', 5, 9877.4, false);
INSERT INTO public.moon VALUES (14, 'tired of moons', 10, 5000, true);
INSERT INTO public.moon VALUES (15, 'uranus', 10, 9000, true);
INSERT INTO public.moon VALUES (16, 'death star', 8, 10.6, false);
INSERT INTO public.moon VALUES (17, 'Planetary', 9, 1234.2, false);
INSERT INTO public.moon VALUES (18, 'intergalactic', 6, 12325, false);
INSERT INTO public.moon VALUES (19, 'just a few more', 5, 5000, false);
INSERT INTO public.moon VALUES (20, 'last one', 5, 100000, true);


--
-- Data for Name: more_moon_info; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.more_moon_info VALUES (1, 'really helpful info 1', '4 score and a billy year ago');
INSERT INTO public.more_moon_info VALUES (2, 'really info 2', 'friday friday');
INSERT INTO public.more_moon_info VALUES (3, 'really info 3', 'long time ago...');


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Turts Big Planet', 1, 'peep peep peep peep peep peep peep', true);
INSERT INTO public.planet VALUES (2, 'Turts Tiny Planet', 1, 'puppycat', false);
INSERT INTO public.planet VALUES (3, 'Abandoned Planet', 4, 'fffff', true);
INSERT INTO public.planet VALUES (4, 'Jaffs Big Planet', 2, 'peep peep peep peep', true);
INSERT INTO public.planet VALUES (5, 'Jaffs tiny Planet', 2, 'politely peep', true);
INSERT INTO public.planet VALUES (6, 'Tiny Giraffe Planet', 2, 'squeak', true);
INSERT INTO public.planet VALUES (7, 'planet of mark', 4, 'boring old man', false);
INSERT INTO public.planet VALUES (8, 'Big Lil Turt Planet', 6, 'boring old turtle', false);
INSERT INTO public.planet VALUES (9, 'Bubbas Planet', 5, 'big bubba', false);
INSERT INTO public.planet VALUES (10, 'Earth', 3, 'a real planet with humans', true);
INSERT INTO public.planet VALUES (11, 'Mars', 3, 'a real planet with no humans', false);
INSERT INTO public.planet VALUES (12, 'Turt wants another planet', 1, 'peeeeeeeeeeeep', true);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'Turt Star', 'red dwarf', 100, 1);
INSERT INTO public.star VALUES (2, 'Jaff Star', 'yellow giant', 4, 1);
INSERT INTO public.star VALUES (4, 'Marks big ol star', 'not a star', 420, 1);
INSERT INTO public.star VALUES (5, 'BubbaStar', 'Bacon', 1414, 2);
INSERT INTO public.star VALUES (6, 'BLT Star', 'Bacon', 2121, 2);
INSERT INTO public.star VALUES (3, 'The Sun', 'bright', 3434, 3);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: more_moon_info_data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.more_moon_info_data_id_seq', 3, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 12, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 6, true);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: more_moon_info more_moon_info_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.more_moon_info
    ADD CONSTRAINT more_moon_info_name_key UNIQUE (name);


--
-- Name: more_moon_info more_moon_info_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.more_moon_info
    ADD CONSTRAINT more_moon_info_pkey PRIMARY KEY (more_moon_info_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: planet planet_planet_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_planet_id_key UNIQUE (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

