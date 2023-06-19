"use client";
import Hero from "@/components/Hero";
import Disclaimer from "@/components/Disclaimer";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import {Suspense, useEffect, useState} from "react";
import Loading from "@/app/loading";

export default function Home() {
  const [isDisclaimerAccepted, setIsDisclaimerAccepted] = useLocalStorage(
    "isDisclaimerAccepted",
    false
  );
    const [loading, setLoading] = useState(true);
  const handleClose = () => {
    setIsDisclaimerAccepted(true);
  };
    useEffect(() => {
        setLoading(false);
    }, [isDisclaimerAccepted]);
    if (loading) {
        return <Loading />;
    }


  return (
    <main>
        {isDisclaimerAccepted ? <Hero /> : <Disclaimer onClose={handleClose} />}{" "}
    </main>
  );
}
