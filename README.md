# vue + django + graphql

## A barebones portfolio web app which uses Django, Vue.js, Tailwindcss, and GraphQL.

# Configuration steps
## Development mode

### Go to the root folder where `manage.py` exists:

```
python manage.py runserver --settings=backend.settings.dev
```

### Install npm packages and run the serve command in another tab.
### Frontend setup
```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

## Production mode
### To compile your static files and test the production environment, run these after every `npm run build`:

```
python manage.py collectstatic
python manage.py makemigrations    
python manage.py migrate
python manage.py runserver --settings=backend.settings.prod
```
### The prod settings will use postgresql when configured properly in backend.settings.prod. You'll need to setup the database and then provide the credentials in the file.
### The application will run on `http://localhost:8000` and npm will be served at `http://localhost:8080`. GraphQL will be available at `http://localhost:8000/graphql` and django-admin at `http://localhost:8080/admin`.


See [Configuration Reference](https://cli.vuejs.org/config/).

See [Build a Blog Using Django, Vue, and GraphQL](https://realpython.com/python-django-blog/).

Thanks to [Photography portfolio w/Tailwind by Nikki Peel](https://codepen.io/nikki-peel/pen/zYKBzzg).

### Note
Not all the vue components are 100% built. This is just a sample project with functional Django, Vue, GraphQL, and Tailwindcss.
