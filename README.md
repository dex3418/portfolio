# Devashish Markam — Portfolio

Django-based personal portfolio for Devashish Markam, Founder of Novaforge Labs.

## Local Setup

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Admin: http://127.0.0.1:8000/admin/
Username: dev | Password: novaforge2025 (change after first login)

## Deploy on Railway

1. Push to GitHub
2. New Project → Deploy from GitHub repo
3. Add environment variables:
   - SECRET_KEY (generate a new one)
   - DEBUG=False
   - DATABASE_URL (Railway provides this automatically with Postgres addon)
4. Add Postgres addon from Railway dashboard
5. Run migrations: railway run python manage.py migrate
6. Create superuser: railway run python manage.py createsuperuser

## Sections

- Home (Hero, About, Projects, Skills, Workshops, Testimonials, CTA)
- Projects
- Workshops
- Blog
- Contact

All content managed via Django Admin at /admin/
