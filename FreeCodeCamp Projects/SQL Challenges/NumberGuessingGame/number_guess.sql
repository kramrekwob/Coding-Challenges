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

DROP DATABASE number_guess;
--
-- Name: number_guess; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE number_guess WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE number_guess OWNER TO freecodecamp;

\connect number_guess

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
-- Name: maintable; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.maintable (
    username character varying(40) NOT NULL,
    bestgame integer DEFAULT 0,
    gamesplayed integer DEFAULT 0,
    guesses integer DEFAULT 0
);


ALTER TABLE public.maintable OWNER TO freecodecamp;

--
-- Data for Name: maintable; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.maintable VALUES ('user_1671122478788', 0, 0, 0);
INSERT INTO public.maintable VALUES ('user_1671122478787', 0, 0, 0);
INSERT INTO public.maintable VALUES ('user_1671122497702', 0, 0, 0);
INSERT INTO public.maintable VALUES ('user_1671122497701', 0, 0, 0);
INSERT INTO public.maintable VALUES ('user_1671122542775', 0, 0, 1333);
INSERT INTO public.maintable VALUES ('user_1671122542776', 0, 0, 2821);
INSERT INTO public.maintable VALUES ('user_1671122711816', 0, 0, 1347);
INSERT INTO public.maintable VALUES ('pat', 6, 1, 1);
INSERT INTO public.maintable VALUES ('user_1671124443683', 18, 2, 0);
INSERT INTO public.maintable VALUES ('user_1671122711817', 0, 0, 2854);
INSERT INTO public.maintable VALUES ('user_1671124443684', 129, 5, 0);
INSERT INTO public.maintable VALUES ('Fred', 2, 2, 1);
INSERT INTO public.maintable VALUES ('Top', 1, 1, 1);
INSERT INTO public.maintable VALUES ('user_1671121955490', 0, 0, 1305);
INSERT INTO public.maintable VALUES ('user_1671121955491', 0, 0, 2753);
INSERT INTO public.maintable VALUES ('user_1671124632304', 138, 2, 0);
INSERT INTO public.maintable VALUES ('Mork', 0, 0, 0);
INSERT INTO public.maintable VALUES ('user_1671124632305', 372, 5, 0);
INSERT INTO public.maintable VALUES ('user_1671123395995', 0, 0, 1335);
INSERT INTO public.maintable VALUES ('user_1671123395996', 0, 0, 2831);
INSERT INTO public.maintable VALUES ('Jen', 1, 7, 0);
INSERT INTO public.maintable VALUES ('user_1671124717530', 336, 2, 0);
INSERT INTO public.maintable VALUES ('user_1671124717531', 175, 5, 0);
INSERT INTO public.maintable VALUES ('user_1671122018498', 0, 0, 1330);
INSERT INTO public.maintable VALUES ('Mark', 10, 2, 0);
INSERT INTO public.maintable VALUES ('user_1671122018499', 0, 0, 2783);
INSERT INTO public.maintable VALUES ('user_1671122124405', 0, 0, 1324);
INSERT INTO public.maintable VALUES ('user_1671122124406', 0, 0, 2805);
INSERT INTO public.maintable VALUES ('user_1671121883154', 0, 0, 1288);
INSERT INTO public.maintable VALUES ('user_1671121883155', 0, 0, 2712);
INSERT INTO public.maintable VALUES ('user_1671124860223', 493, 2, 0);
INSERT INTO public.maintable VALUES ('user_1671124860224', 301, 5, 0);
INSERT INTO public.maintable VALUES ('user_1671123201257', 0, 0, 1332);
INSERT INTO public.maintable VALUES ('user_1671123201258', 0, 0, 2826);


--
-- Name: maintable maintable_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.maintable
    ADD CONSTRAINT maintable_pkey PRIMARY KEY (username);


--
-- PostgreSQL database dump complete
--

