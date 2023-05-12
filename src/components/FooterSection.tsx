function Footer() {
  return (
    <footer className="mt-4 text-sm text-center">
      <p>
        Dibuat oleh{' '}
        <a
          href="https://is-a.fun"
          target="_blank"
          rel="noopenner noreferrer"
          className="font-bold text-link"
        >
          L RMN
        </a>
      </p>
      <p className="mt-2">
        Cek juga:{' '}
        <a
          href="https://qr-generator.is-a.fun/"
          target="_blank"
          rel="noopenner noreferrer"
          className="font-bold text-link"
        >
          QR Generator
        </a>
        {', '}
        <a
          href="https://quran-everywhere.is-a.fun/"
          target="_blank"
          rel="noopenner noreferrer"
          className="font-bold text-link"
        >
          Al-Qur'an Everywhere
        </a>
      </p>
    </footer>
  )
}

export default Footer
