# Tracdelight API Documentation

This is where the [documentation](http://edelight.github.io/) for the [Tracdelight API](http://api.tracdelight.com/) lives.
We use [apidocjs](http://apidocjs.com) to document the API. Please read below to get started working with the documentation.

# Overview
The files seen in this repo are the compiled source of the files which can be found in the [edelight/api](https://github.com/edelight/api)
repository in the [docs/api/](https://github.com/edelight/api/tree/master/docs/api) folder.

When updating documentation source files, you will be doing your work in the [edelight/api](https://github.com/edelight/api)
repository and then a deployment job will transfer your compiled source to this repository.

# Getting started
All you need to know is the [apiDoc-Params](http://apidocjs.com/#examples) which will be processed by ``apidocjs``. If you need to inherit some code block, define it in ``_apidoc.py`` and import using the ``@apiUse``
parameter.

In order to get a quick feedback loop when writing your own documentation, you
can skip ``Docker`` and just run the ``apidoc`` command line tool which you can
install with [npm](https://nodejs.org/en/download/).

Run:

```
$ npm install apidoc http-server -g
```

Then, get yourself to [docs/api](https://github.com/edelight/api/tree/master/docs/api) and run:

```
$ apidoc && http-server doc
```

This command will build the documentation and run a ``http-server`` in the
compiled source folder. You can now visit ``http://localhost:8080`` in your
browser and see the documentation. The ``doc`` folder is ignored by our
``.gitignore``, so don't worry about it.

Before finishing, you will want to test the documentation via a ``Docker``
build. You can do this by running:

```
$ docker-compose build
$ docker-compose run docs apidoc -i docs/api -o build/apidocs
$ docker-compose up
```

You can now, again, visit ``http://localhost:8010`` and see the documentation
that ``docker`` has built.

# Working with versioning
The [apidocjs version documentation](http://apidocjs.com/#example-versioning) summarises the general concepts. The version which you
see on the top-right part of the beginning of the [documentation](http://edelight.github.io/) is controlled by the version which is
set in the [apidoc.json](https://github.com/edelight/api/blob/master/docs/api/apidoc.json).

> It is important to keep a ``@apiVersion`` in each code block.

## Upgrading Versions

All code blocks will declare their version which should match the version set in ``apidoc.json``. When we do version upgrades, a
``search-replace-all`` will need to be done for the version in the following locations:

  - ``apidoc.json``
  - all ``*.py`` source files
  - ``_apidoc.py`` (where we store our inherited blocks)

When a semantic [major, minor or patch](http://semver.org/) occurs, we will want to:

  - Upgrade our version in the correct files
  - Preserve our ``API`` history


### Preserving API History

Preserving ``API`` history is extremely important for consumers of the ``API`` documentation. It can be extremely hard to keep up
with ``API`` changes, especially when things move fast. In order to stop this problem, we will preserve all versions of our ``API``
source files in the ``versioning/`` folder. 

A full example follows.

### Concrete example

Say, for example, our current version is ``1.0.0`` and we decide to upgrade to ``1.1.0``, we do the following:

  
  - Backup:
    - Create a new folder in ``versioninig/`` with the name of the current version
      - In this example, we would do: ``mkdir versioning/1.0.0``
    - Copy existing ``*.py``, and ``_apidoc.json`` source files into ``versioning/1.0.0``
  
  - Upgrade:
    - Upgrade the version from ``1.0.0`` in ``apidoc.json``, to ``1.1.0``
    - Upgrade the version from ``1.0.0`` in the source files (``*.py``), to ``1.1.0``
    - Upgrade the version from ``1.0.0`` in ``_apidoc.py``, to ``1.1.0``

``apidocjs`` will detect a lesser version of each source file in the directory structure (``versioning/``) and will provide a diff when
an ``API`` consumer uses the ``Compare with all predecessor`` or when they directly choose a version. The new version will be
shown for all code blocks and the documentation header.


# Template
This is a template that can be used when starting a new top level documentation file.

```
    """
    @api
    @apiVersion
    @apiName
    @apiGroup
    @apiDescription
    @apiUse

    @apiParam
    @apiParam
    @apiParam
    @apiParamExample {json} Request example

    @apiSuccess
    @apiSuccessExample {json} Non-paginated result example

    @apiExample {curl} curl
    @apiExample {javascript} javascript
    @apiExample {python} python

    @apiUse NoAuthenticationCredentials
    @apiUse NoAuthenticationCredentialsExample

    @apiUse HTTPMethodNotAllowed
    @apiUse HTTPMethodNotAllowedExample
    """
```
